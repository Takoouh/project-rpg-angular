import { createFeatureSelector } from "@ngrx/store";
import { BattleSetUpData } from "../interfaces/battle";

export const selectBattleInfos = createFeatureSelector<Readonly<BattleSetUpData>>('battle');