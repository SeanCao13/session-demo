import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-cmp',
  templateUrl: './child-cmp.component.html',
  styleUrls: ['./child-cmp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildCmpComponent implements OnInit {

  @Input() vData;
  constructor() { }

  ngOnInit(): void {
  }
}
