export interface BattleSetUpData {
    characterId:number;
    monsterId:number;
    monsterRemainingLife: number;
    id:number
}

export interface BattleData{
    monsterRemainingLife: number;
    isBattleOver: boolean;
    reward: battleRewardData;
}

export interface battleRewardData {
    experience: number;
    gold: number;
    items: [];
}

export interface BattleReducer extends BattleSetUpData, BattleData {
}