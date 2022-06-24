import { createAction, props } from "@ngrx/store";
import { Character } from "../../interfaces/character";

export const storeCharacterInfos = createAction('[Character] Store Character Infos', props<{character:Character}>());
export const deleteCharacterInfos = createAction('[Character] Delete Character Infos');