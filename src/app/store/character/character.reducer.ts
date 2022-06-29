import { createReducer, on } from "@ngrx/store";
import { CharacterInitialState, CharacterState } from "src/app/interfaces/character";
import { storeCharacterInfos, deleteCharacterInfos, sendCharacterToDeath } from "./character.actions";

export const initialState: CharacterState | CharacterInitialState = { isCharacterDead:false };

export const characterReducer = createReducer(
    initialState,
    on(storeCharacterInfos, (state, {character})=> ({...state, ...character})),
    on(deleteCharacterInfos, (state)=>(initialState)),
    on(sendCharacterToDeath, (state)=>({...state, isCharacterDead: true}))
)