export interface Monster {
	id: number;
	monster_name: string;
	life_points: number;
	strength: number;
	speed: number;
	gold: number;
	experience: number;
}

export interface MonsterInBattle extends Monster {
	remainingLifePoint: number;
}
