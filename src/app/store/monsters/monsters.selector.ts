import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BattleSetUpData } from "../../interfaces/battle";
import { Monster, MonsterInBattle } from "../../interfaces/monster";
import { AppStore } from "../../interfaces/store";

export const selectMonsters = createFeatureSelector<Readonly<Monster[]>>('monsters');

export const selectMonterInBattle = createSelector<AppStore, Monster[], BattleSetUpData,MonsterInBattle>(
    (state: AppStore)=>state.monsters,
    (state:AppStore)=>state.battle,
    (monsters:Monster[], battleInfos:BattleSetUpData)=>{
     const monsterId =  monsters.findIndex(monster=> monster.id ==  battleInfos.monsterId)
     return {
        ...monsters[monsterId], 
        remainingLifePoint : battleInfos.monsterRemainingLife
     }
    }
)