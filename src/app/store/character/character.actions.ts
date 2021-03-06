import { createAction, props } from "@ngrx/store";
import { Character, CharacterState } from "../../interfaces/character";

export const storeCharacterInfos = createAction('[Character] Store Character Infos', props<{character:Character}>());
export const deleteCharacterInfos = createAction('[Character] Delete Character Infos');
export const sendCharacterToDeath = createAction('[Character] Death of Character')
export const reviveAndUpdateCharacter = createAction('[Action] Revive and store Character Infos', props<{character:CharacterState}>()) 