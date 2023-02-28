// state/dialog.reducer.ts

import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
} from '@ngrx/store';
import { DialogActions } from './dialog.actions';

export interface DialogState {
  isOpen: boolean;
}

const initialState: DialogState = {
  isOpen: false,
};

export const dialogFeatureKey = 'dialog';

export const dialogReducer = createReducer(
  initialState,
  on(DialogActions.openDialog, (state) => ({ ...state, isOpen: true })),
  on(DialogActions.closeDialog, (state) => ({ ...state, isOpen: false }))
);

export const selectDialogState =
  createFeatureSelector<DialogState>(dialogFeatureKey);

export const selectDialogIsOpen = createSelector(
  selectDialogState,
  (state: DialogState) => state.isOpen
);
