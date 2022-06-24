import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeCharacterInfos } from './store/character.actions';
import { CharacterService } from './services/character.service';
import { AppStore } from './interfaces/store';
import { BattleService } from './services/battle.service';
import { storeBattleInfos } from './store/battle.actions';
import { MatDialog } from '@angular/material/dialog';
import { BattleModalComponent } from './battle-modal/battle-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store:Store<AppStore>,
    private characterService:CharacterService,
    private battleService:BattleService,
    public modal:MatDialog ){
    };

  title = 'Project RPG';

  ngOnInit():void {
    const localStorageCharacterId:string | null = localStorage.getItem("currentCharacterId")
    if(!!localStorageCharacterId){
      this.characterService.getCharacter(parseInt(localStorageCharacterId)).subscribe(result=>
          this.store.dispatch(storeCharacterInfos({character:result}))
         )
      this.battleService.checkCharacterBattle(parseInt(localStorageCharacterId)).subscribe(result => {
        if(result){
          this.store.dispatch(storeBattleInfos({battleInfos:result}))
          this.modal.open(BattleModalComponent, {disableClose:true})
        }
      })
    }
  }
}
