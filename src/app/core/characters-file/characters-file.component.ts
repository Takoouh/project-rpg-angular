import { Component, Inject, OnInit } from '@angular/core';
import { CharacterFile } from '../../interfaces/character';
import { CharacterService } from '../../services/character.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface CharacterDeleteModalData {
  characterId: number;
  characterName: string;
  characters: CharacterFile[]
}

@Component({
  selector: 'app-characters-file',
  templateUrl: './characters-file.component.html',
  styleUrls: ['./characters-file.component.scss']
})
export class CharactersFileComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    public modal: MatDialog
    ) { }

  characters: CharacterFile[] = [];

  
  onSelect(characterId: number): void {
    localStorage.setItem("currentCharacterId", characterId.toString())
    location.reload();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  openDialog(characterId:number, characterName: string){
    let modalRef = this.modal.open(CharactersFileDeleteModal, {
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
  templateUrl:'./components/characters-file-delete-modal/characters-file-delete-modal.html',
  styleUrls: ['./components/characters-file-delete-modal/characters-file-delete-modal.scss']
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
