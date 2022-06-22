import { Character } from "./character";
import { Monster } from "./monster";


export interface AppStore {
    character:Character;
    monsters: Monster[];
}