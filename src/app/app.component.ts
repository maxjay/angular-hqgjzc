import { Component, VERSION } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showModal(): void {
    console.log('hello');
  }
}
