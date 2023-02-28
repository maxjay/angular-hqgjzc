import { createAction, props } from '@ngrx/store';

export class DialogActions {
  static openDialog = createAction('[Dialog] Open');
  static closeDialog = createAction('[Dialog] Close');
}

export const showDialog = createAction(
  '[Dialog Component] Show Dialog',
  props<{ dialogId: string }>()
);
