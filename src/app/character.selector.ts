import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Character } from "./interfaces/character";

export interface AppState {
    character:Character
}

export const selectCharacter = createFeatureSelector<Readonly<Character>>('character');