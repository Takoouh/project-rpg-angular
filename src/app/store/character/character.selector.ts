import { createFeatureSelector, createSelector, select } from "@ngrx/store";
import { CharacterState } from "../../interfaces/character";


export const selectCharacter = createFeatureSelector<Readonly<CharacterState>>('character');

export const selectCharacterName = createSelector(selectCharacter, (state:CharacterState)=>state.name)

export const selectCharacterId = createSelector(selectCharacter, (state:CharacterState)=>state.id)

export const selectIsCharacterDead = createSelector(
    selectCharacter, (state:CharacterState) => state.isCharacterDead )


