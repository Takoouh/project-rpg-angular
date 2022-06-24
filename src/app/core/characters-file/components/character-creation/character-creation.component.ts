import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CharacterService } from '../../../../services/character.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {
  constructor(
    public modal: MatDialog
    ) { }

  openModal():void {
    this.modal.open(CharactersCreationModal)
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'character-creation-modal',
  templateUrl:'character-creation-modal.html',
  styleUrls: ['./character-creation-modal.scss']
})
export class CharactersCreationModal {
  constructor(
    private characterService: CharacterService,
    public modalRef: MatDialogRef<CharacterCreationComponent>
    ) { }

  newCharacterName:string = '';
  
  createNewCharacter():void {
    if(this.newCharacterName){
      this.characterService.createCharacter(this.newCharacterName.trim()).subscribe((result)=>{
        localStorage.setItem('currentCharacterId', result.id.toString())
        return location.reload()})
    }
  }

}
