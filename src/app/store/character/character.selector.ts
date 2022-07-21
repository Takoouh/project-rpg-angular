import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { CharacterState } from '../../interfaces/character';

export const selectCharacter = createFeatureSelector<Readonly<CharacterState>>('character');

export const selectCharacterName = createSelector(selectCharacter, (state: CharacterState) => state.name);

export const selectCharacterId = createSelector(selectCharacter, (state: CharacterState) => state.id);

export const selectIsCharacterDead = createSelector(selectCharacter, (state: CharacterState) => state.isCharacterDead);

export const selectCharacterPlace = createSelector(selectCharacter, (state: CharacterState) => state.place);

export const selectCharacterGold = createSelector(selectCharacter, (state: CharacterState) => state.gold);

export const selectCharacterItems = createSelector(selectCharacter, (state: CharacterState) => state.items);
