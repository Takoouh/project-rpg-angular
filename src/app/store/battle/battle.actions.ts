import { createAction, props } from "@ngrx/store";
import { BattleData, BattleSetUpData } from "../../interfaces/battle";

export const storeBattleInfos = createAction("[Battle] Store Battle Infos", props<{battleInfos: BattleSetUpData}>());

export const updateBattleInfos = createAction("[Battle] Update battle infos", props<{battleInfos:BattleData}>())