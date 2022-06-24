import { createAction, props } from "@ngrx/store";
import { Monster } from "../../interfaces/monster";

export const storeMonsterList = createAction('[Monster] Store Monster List', props<{monsters:Monster[]}>());