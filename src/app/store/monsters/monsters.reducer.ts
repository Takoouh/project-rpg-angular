import { createReducer, on } from "@ngrx/store"
import { Monster } from "../../interfaces/monster";
import { storeMonsterList } from "./monsters.actions";

const initialState: Monster[] = [];

export const monstersReducer = createReducer(
    initialState,
    on(storeMonsterList, (state, {monsters}) => [...monsters])
)