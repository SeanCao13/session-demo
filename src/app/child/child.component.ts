import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  vData: any;
  public clickStream = new Subject<Event>();
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

  buttonClick(event:Event){
        this.clickStream.next(event);
    }
}
