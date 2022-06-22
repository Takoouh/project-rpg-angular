import { createFeatureSelector } from "@ngrx/store";
import { Monster } from "../interfaces/monster";

export const selectMonsters = createFeatureSelector<Readonly<Monster[]>>('monsters');