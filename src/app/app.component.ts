import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeCharacterInfos } from './store/character.actions';
import { CharacterService } from './services/character.service';
import { AppStore } from './interfaces/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store:Store<AppStore>,
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
