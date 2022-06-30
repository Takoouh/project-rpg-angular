import { createReducer, on } from "@ngrx/store";
import { activateLoading, disactivateLoading } from "./isLoading.actions";

const initialState: boolean = false;

export const isLoadingReducer = createReducer(
    initialState,
    on(activateLoading, (state)=> true),
    on(disactivateLoading, (state)=> false)
)