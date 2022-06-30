import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/interfaces/store';
import { activateLoading, disactivateLoading } from 'src/app/store/isLoading/isLoading.actions';
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
    private store:Store<AppStore>,
    private characterService: CharacterService,
    public modalRef: MatDialogRef<CharacterCreationComponent>
    ) { }

  newCharacterName:string = '';
  
  createNewCharacter():void {
    if(this.newCharacterName){
      this.store.dispatch(activateLoading());
      this.characterService.createCharacter(this.newCharacterName.trim()).subscribe((result)=>{
        localStorage.setItem('currentCharacterId', result.id.toString())
        this.store.dispatch(disactivateLoading());
        return location.reload()})
    }
  }

}
