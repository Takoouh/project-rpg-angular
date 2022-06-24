import { createFeatureSelector } from "@ngrx/store";
import { Character } from "../../interfaces/character";


export const selectCharacter = createFeatureSelector<Readonly<Character>>('character');