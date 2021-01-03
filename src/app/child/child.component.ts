import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  vData: any;
  constructor() {
    this.vData = {
      name: 'Christoph Burgdorf',
      email: 'christoph@thoughtram.io'
    }
   }

  ngOnInit(): void {
  }

  get time() {
    return Date.now();
  }

  changeData() {
    this.vData.name = 'Pascal Precht';
  }
}
