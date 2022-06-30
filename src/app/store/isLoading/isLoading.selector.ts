import { createFeatureSelector } from "@ngrx/store";

export const selectIsLoading = createFeatureSelector<Readonly<boolean>>('isLoading')