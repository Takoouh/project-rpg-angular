import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { activateLoading, disactivateLoading } from 'src/app/store/isLoading/isLoading.actions';
import { Character } from '../../interfaces/character';
import { Monster, MonsterInBattle } from '../../interfaces/monster';
import { AppStore } from '../../interfaces/store';
import { BattleService } from '../../services/battle.service';
import { CharacterService } from '../../services/character.service';
import { MonsterService } from '../../services/monster.service';
import { updateBattleInfos } from '../../store/battle/battle.actions';
import { selectBattleInfos } from '../../store/battle/battle.selector';
import { storeCharacterInfos } from '../../store/character/character.actions';
import { selectCharacter } from '../../store/character/character.selector';
import { storeMonsterList } from '../../store/monsters/monsters.actions';
import { selectMonsters, selectMonterInBattle } from '../../store/monsters/monsters.selector';

@Component({
  selector: 'app-battle-modal',
  templateUrl: './battle-modal.component.html',
  styleUrls: ['./battle-modal.component.scss']
})
export class BattleModalComponent implements OnInit {

monsterList:Monster[] = [];
character$:Observable<Character>;
monster$:Observable<MonsterInBattle>;
battleId:number = 0;
characterId:number = 0;
isBattleOver:boolean = false;
isCharacterDead:boolean = false;

preventFurtherAction: boolean = false;

  constructor(
    private monsterService: MonsterService,
    private battleService: BattleService,
    private characterService: CharacterService,
    private store: Store<AppStore>
  ) { 
    this.store.select(selectMonsters).subscribe(result=> this.monsterList =[...result])  
    this.character$ = this.store.select(selectCharacter);
    this.monster$ = this.store.select(selectMonterInBattle);
    this.store.select(selectBattleInfos).subscribe(result=>this.battleId = result.id);
    this.store.select(selectCharacter).subscribe(result => this.characterId = result.id);
  }

  onAttack(): void {
    // We prevent player to spam button if previous action is not done yet
    if(this.preventFurtherAction){
      return
    }
    this.preventFurtherAction = true;

    this.store.dispatch(activateLoading());
    this.battleService.playerAttack(this.battleId).subscribe(result => {
      this.store.dispatch(disactivateLoading())
      this.store.dispatch(updateBattleInfos({battleInfos:result}))
      this.characterService.getCharacter(this.characterId).subscribe(result=>
        // animation too see health bar depleting
        setTimeout(()=>{
          this.store.dispatch(storeCharacterInfos({character:result}));   
          this.preventFurtherAction=false;
        }, 500)
        );
      if(result.isBattleOver){
        // animation to wait a bit before hiding battle view
        setTimeout(()=>{
          this.isCharacterDead = result.monsterRemainingLife > 0
          this.isBattleOver = true;
          this.preventFurtherAction=false; 
        }, 1000)
      }
    })
  }

  ngOnInit(): void {
    
    if(this.monsterList.length === 0 ){ 
      this.store.dispatch(activateLoading());
      this.monsterService.getMonsters().subscribe(result => 
        {
          this.store.dispatch(disactivateLoading());
          this.store.dispatch(storeMonsterList({monsters:result}))}
      )
     }
  }

}
