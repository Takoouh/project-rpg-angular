import { createAction, props } from "@ngrx/store";
import { Character } from "./interfaces/character";

export const storeCharacterInfos = createAction('[Character Component] Store Character Infos', props<{character:Character}>());
export const deleteCharacterInfos = createAction('[Character Component] Delete Character Infos');