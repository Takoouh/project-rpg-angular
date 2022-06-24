import { BattleSetUpData } from "./battle";
import { Character } from "./character";
import { Monster } from "./monster";


export interface AppStore {
    character:Character;
    monsters: Monster[];
    battle:BattleSetUpData;
}