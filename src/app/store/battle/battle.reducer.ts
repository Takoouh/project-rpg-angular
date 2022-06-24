import { createReducer, on } from "@ngrx/store";
import { BattleReducer } from "../../interfaces/battle";
import { storeBattleInfos, updateBattleInfos } from "./battle.actions";

const initialState: BattleReducer | {} = {};

export const battleReducer = createReducer(
    initialState,
    on(storeBattleInfos, (state, {battleInfos}) => ({...initialState, ...battleInfos})),
    on(updateBattleInfos, (state, {battleInfos})=>({...state, ...battleInfos}))
);