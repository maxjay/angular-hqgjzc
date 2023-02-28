import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { DialogFooterDirective } from './dialog-footer.directive';
// import { DialogHeaderDirective } from './dialog-header.directive';
// import { DialogContentDirective } from './dialog-content.directive';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TestComponent } from './component/test/test.component';
// import { DialogComponent } from './component/dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
