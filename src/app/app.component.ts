import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCharacterInfos, storeCharacterInfos } from './character.actions';
import { CharacterService } from './character.service';
import { Character } from './interfaces/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  character$:Observable<Character>;

  constructor(private store:Store<{character:Character}>,
    private characterService:CharacterService){
      this.character$ = store.select('character');
    };

  title = 'Project RPG';
  isPlayerLogged= localStorage.getItem("currentCharacterId");

  onLogout():void{
    localStorage.removeItem('currentCharacterId');
    this.store.dispatch(deleteCharacterInfos());
    location.reload();
  }

  ngOnInit():void {
    const localStorageCharacterId:string | null = localStorage.getItem("currentCharacterId")
    if(!!localStorageCharacterId){
      this.characterService.getCharacter(parseInt(localStorageCharacterId)).subscribe(result=> this.store.dispatch(storeCharacterInfos({character:result})))
     
    }
  }
}
