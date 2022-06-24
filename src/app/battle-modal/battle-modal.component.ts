import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BattleSetUpData } from '../interfaces/battle';
import { Character } from '../interfaces/character';
import { Monster, MonsterInBattle } from '../interfaces/monster';
import { AppStore } from '../interfaces/store';
import { BattleService } from '../services/battle.service';
import { CharacterService } from '../services/character.service';
import { MonsterService } from '../services/monster.service';
import { updateBattleInfos } from '../store/battle.actions';
import { selectBattleInfos } from '../store/battle.selector';
import { storeCharacterInfos } from '../store/character.actions';
import { selectCharacter } from '../store/character.selector';
import { storeMonsterList } from '../store/monsters.actions';
import { selectMonsters, selectMonterInBattle } from '../store/monsters.selector';

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
isBattleOver:boolean = false ;

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
    this.store.select(selectBattleInfos).subscribe(result=> 
       this.battleId = result.id
    );
    this.store.select(selectCharacter).subscribe(result => this.characterId = result.id);
  }

  onAttack(): void {
    // We prevent player to spam button if previous action is not done yet
    if(this.preventFurtherAction){
      return
    }
    this.preventFurtherAction = true;


    this.battleService.playerAttack(this.battleId).subscribe(result => {
      this.store.dispatch(updateBattleInfos({battleInfos:result}))
      this.characterService.getCharacter(this.characterId).subscribe(result=>
        
        setTimeout(()=>{
          this.store.dispatch(storeCharacterInfos({character:result}));   
          this.preventFurtherAction=false;
        }, 500)
        );
      if(result.isBattleOver){
        setTimeout(()=>{
          this.isBattleOver = true;
          this.preventFurtherAction=false; 
        }, 1000)
      }
    })
  }

  ngOnInit(): void {
    
    if(this.monsterList.length === 0 ){ 
      this.monsterService.getMonsters().subscribe(result => 
        this.store.dispatch(storeMonsterList({monsters:result}))
      )
     }
  }

}
