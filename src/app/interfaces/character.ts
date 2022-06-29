export interface CharacterFile {
    id:number;
    name: string;
    level: number;
}

export interface Character {
    id:number;
    name: string;
    level: number;
    experience: number;
    remaining_life_point: number;
    life_point: number;
    gold: number;
    items: Item[];
    stats:CharacterStats;
}

export interface CharacterInitialState {
    isCharacterDead: boolean;
}

export interface CharacterState extends Character, CharacterInitialState  {
}

export interface CharacterStats {
    strength: number;
    speed: number;
    intelligence: number;
}

export interface Item {
    item_name: string;
    item_desc: string;
    type: string;
    subtype?: string;
    price: number;
    strength: number;
    speed: number;
}
