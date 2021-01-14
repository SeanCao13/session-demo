import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'init-angular-demo';

  ngDoCheck(): void {
    console.log('ngDoCheck in app component');
  }
}
