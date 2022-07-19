import { ItemOnCharacter } from './item';
import { Place } from './place';

export interface CharacterFile {
	id: number;
	name: string;
	level: number;
}

export interface Character {
	id: number;
	name: string;
	level: number;
	experience: number;
	exp_to_level_up: number;
	skill_points: number;
	remaining_life_points: number;
	life_points: number;
	gold: number;
	items: ItemOnCharacter[];
	stats: CharacterStats;
	place: Place;
}

export interface CharacterInitialState {
	isCharacterDead: boolean;
}

export interface CharacterState extends Character, CharacterInitialState {}

export interface CharacterStats {
	strength: number;
	speed: number;
	intelligence: number;
}

