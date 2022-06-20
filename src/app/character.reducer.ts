import { createReducer, on } from "@ngrx/store";
import { storeCharacterInfos, deleteCharacterInfos } from "./character.actions";

export const initialState = {};

export const characterReducer = createReducer(
    initialState,
    on(storeCharacterInfos, (state, {character})=> ({...character})),
    on(deleteCharacterInfos, (state)=>(initialState))
)