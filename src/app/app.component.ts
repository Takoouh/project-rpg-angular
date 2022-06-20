import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  storeCharacterInfos } from './character.actions';
import { CharacterService } from './character.service';
import { Character } from './interfaces/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store:Store<{character:Character}>,
    private characterService:CharacterService){
    };

  title = 'Project RPG';



  ngOnInit():void {
    const localStorageCharacterId:string | null = localStorage.getItem("currentCharacterId")
    if(!!localStorageCharacterId){
      this.characterService.getCharacter(parseInt(localStorageCharacterId)).subscribe(result=> this.store.dispatch(storeCharacterInfos({character:result})))
    }
  }
}
