import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogActions } from '../../state/dialog.actions';
import { selectDialogIsOpen } from '../../state/dialog.reducer';
import { DialogState } from './dialog.reducer';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  // styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  isOpen$ = this.store.select(selectDialogIsOpen);
  dialogShown: boolean;

  constructor(private store: Store) {
    console.log('yes');
    this.store
      .select((state: { dialog: DialogState }) => state.dialog)
      .subscribe((state: DialogState) => {
        console.log('jeff');
        if (state.dialogId === 'dialog') {
          this.dialogShown = true;
        }
      });
  }

  onClose() {
    this.store.dispatch(DialogActions.closeDialog());
  }

  clack() {
    console.log('clack');
  }

  ngOnInit() {}
}
