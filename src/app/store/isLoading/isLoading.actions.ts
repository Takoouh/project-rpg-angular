import { createAction } from "@ngrx/store";

export const activateLoading = createAction('[IsLoading] Activate Loading')
export const disactivateLoading = createAction('[IsLoading] Disactivate Loading')