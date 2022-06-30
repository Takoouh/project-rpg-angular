import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sendCharacterToDeath, storeCharacterInfos } from './store/character/character.actions';
import { CharacterService } from './services/character.service';
import { AppStore } from './interfaces/store';
import { BattleService } from './services/battle.service';
import { storeBattleInfos } from './store/battle/battle.actions';
import { MatDialog } from '@angular/material/dialog';
import { BattleModalComponent } from './common/battle-modal/battle-modal.component';
import { selectIsCharacterDead } from './store/character/character.selector';
import { selectIsLoading } from './store/isLoading/isLoading.selector';
import { Observable } from 'rxjs';
import { activateLoading, disactivateLoading } from './store/isLoading/isLoading.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isCharacterDead: boolean= false;
  isLoading$: Observable<boolean>;

  constructor(private store:Store<AppStore>,
    private characterService:CharacterService,
    private battleService:BattleService,
    public modal:MatDialog ){
      this.store.select(selectIsCharacterDead).subscribe(result=> this.isCharacterDead=result)
      this.isLoading$ = this.store.select(selectIsLoading)
    };

  title = 'Project RPG';

  ngOnInit():void {
    const localStorageCharacterId:string | null = localStorage.getItem("currentCharacterId")
    if(!!localStorageCharacterId){
      this.store.dispatch(activateLoading());
      this.characterService.getCharacter(parseInt(localStorageCharacterId)).subscribe(result=>{
          this.store.dispatch(storeCharacterInfos({character:result}));
          // check if character is Dead in order to store the info
          if(result.remaining_life_point === 0){
            this.store.dispatch(sendCharacterToDeath());
          }}
         )
      this.battleService.checkCharacterBattle(parseInt(localStorageCharacterId)).subscribe(result => {
        if(result){
          this.store.dispatch(storeBattleInfos({battleInfos:result}))
          this.modal.open(BattleModalComponent, {disableClose:true})
        }
        this.store.dispatch(disactivateLoading())
      })
    }
  }
}
