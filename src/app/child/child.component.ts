import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  vData: any;
  private innerCities = [];

  public get cities(): string[] {
    console.log('in child cities');
    return this.innerCities;
  }

  public clickStream = new Subject<Event>();
  constructor() {
   }

  ngOnInit(): void {
    console.log('ngOnInit app child');
    this.innerCities = ['北京', '上海', '广州', '深圳'];
    setTimeout(() => {
      this.innerCities = this.innerCities.map((city) => city + "2");
      // this.innerCities.push('海口');
      // this.innerCities[1] = '重庆';
    }, 3000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck app child');
  }

  get time() {
    return Date.now();
  }

  changeData() {
    // this.vData.name = 'Pascal Precht';
    this.vData = {
      name: 'Christoph Burgdorf',
      email: 'christoph@thoughtram.io'
    }
  }

  buttonClick(event:Event){
        this.clickStream.next(event);
  }

  showNgIf(): boolean {
    console.log('in child ngIf');
    return true;
  }

  methodInTemplate(): string {
    console.log('method in template in child');
    return 'method in template';
  }
}
