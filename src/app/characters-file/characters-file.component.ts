import { Component, Inject, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { CharacterService } from '../character.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface CharacterDeleteModalData {
  characterId: number;
  characterName: string;
  characters: Character[]
}

@Component({
  selector: 'app-characters-file',
  templateUrl: './characters-file.component.html',
  styleUrls: ['./characters-file.component.scss']
})
export class CharactersFileComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    public dialog: MatDialog
    ) { }

  characters: Character[] = [];

  
  selectedCharacter?: Character;
  onSelect(characterId: number): void {
    this.selectedCharacter = this.characters.find(character => character.id === characterId)
    localStorage.setItem("currentCharacterId", characterId.toString())
    location.reload();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  openDialog(characterId:number, characterName: string){
    let modalRef = this.dialog.open(CharactersFileDeleteModal, {
      data:{
        characterId,
        characterName,
        characters: this.characters
      }
    })
    return modalRef.afterClosed().subscribe(()=>{
      if(modalRef.componentInstance.hasCharacterBeenDeleted){
        this.characters = this.characters.filter(({id})=> id!==characterId)
      }
    })
  }

  ngOnInit(): void {
    this.getCharacters();
  }

}

@Component({
  selector: 'characters-file-delete-modal',
  templateUrl:'characters-file-delete-modal.html',
  styleUrls: ['./characters-file-delete-modal.scss']
})
export class CharactersFileDeleteModal {
  constructor(
    private characterService: CharacterService,
    public modalRef: MatDialogRef<CharactersFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data:CharacterDeleteModalData
  ){}

  hasCharacterBeenDeleted:boolean=false

  deleteCharacter(characterId:number){
    this.characterService.deleteCharacter(characterId)
    .subscribe(()=>{
      this.hasCharacterBeenDeleted = true
      this.modalRef.close()
    })
  }
}
