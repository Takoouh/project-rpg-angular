export interface Monster {
    id:number;
    monster_name: string;
    life_point: number;
    strength: number;
    speed:number;
    gold: number;
    experience: number;
}

export interface MonsterInBattle extends Monster {
    remainingLifePoint: number;
}