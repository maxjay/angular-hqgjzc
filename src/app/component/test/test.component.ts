import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { showDialog } from '../../state/dialog.actions';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  // styleUrls: ['./test-component.component.css'],
})
export class TestComponent {
  // @ViewChild('dialog') dialog: DialogComponent;

  // openDialog() {
  //   this.dialog.onOpen();
  // }

  constructor(private store: Store<any>) {}

  close() {
    console.log('yeet');
    // this.dialog.onClose();
    this.store.dispatch(showDialog({ dialogId: 'dialog' }));
  }
}
