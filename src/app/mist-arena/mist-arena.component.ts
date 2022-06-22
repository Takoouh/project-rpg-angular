import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Monster } from '../interfaces/monster';
import { AppStore } from '../interfaces/store';
import { BattleService } from '../services/battle.service';
import { MonsterService } from '../services/monster.service';
import { selectCharacter } from '../store/character.selector';
import { storeMonsterList } from '../store/monsters.actions';
import { selectMonsters } from '../store/monsters.selector';

export interface MistArenaBattleConfirmationModalData {
  monsterName: string;
  monsterId: number
}

@Component({
  selector: 'app-mist-arena',
  templateUrl: './mist-arena.component.html',
  styleUrls: ['./mist-arena.component.scss', './mist-arena-battle-confirmation-modal.scss']
})
export class MistArenaComponent implements OnInit {
  
  monsterList:Monster[] = [];

  constructor(
    private monsterService: MonsterService,
    private store:Store<AppStore>,
    public modal: MatDialog
    ) { 
    this.store.select(selectMonsters).subscribe(result=>this.monsterList=[...result]);
  }

  openModal(monsterName:string, monsterId:number){
    this.modal.open(MistArenaBattleConfirmationModal, {
      data:{
        monsterName,
        monsterId
      }
    })
  }

  ngOnInit(): void {
    this.monsterService.getMonsters().subscribe(result=> 
        this.store.dispatch(storeMonsterList({monsters: result}))
      );
  }

}


@Component({
  selector:'mist-arena-battle-confirmation-modal',
  templateUrl:'mist-arena-battle-confirmation-modal.html',
  styleUrls:['./mist-arena-battle-confirmation-modal.scss']
})
export class MistArenaBattleConfirmationModal{
  
  characterId:number=0

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:MistArenaBattleConfirmationModalData,
    private store:Store<AppStore>,
    private battleService: BattleService
  ){
    this.store.select(selectCharacter).subscribe(result=> this.characterId= result.id)
  }

  onInitBattleValidation(monsterId:number){
    this.battleService.initBattle(this.characterId, monsterId).subscribe(value=>console.log(value))
  }

}