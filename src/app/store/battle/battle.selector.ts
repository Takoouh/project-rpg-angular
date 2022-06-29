import { createFeatureSelector } from "@ngrx/store";
import { BattleReducer } from "../../interfaces/battle";

export const selectBattleInfos = createFeatureSelector<Readonly<BattleReducer>>('battle');