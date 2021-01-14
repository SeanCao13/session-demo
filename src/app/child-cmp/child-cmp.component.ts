import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildCmpComponent implements OnInit {
  cmpData: any;
  @Input()
  public set vData(v: string) {
    console.log('in childCmp set')
    this.cmpData = v;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
