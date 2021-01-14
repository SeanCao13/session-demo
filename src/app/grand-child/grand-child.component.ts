import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent implements OnInit {

  @Input() cities = [];
  prevLength;
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.prevLength = this.cities.length;
    this.cd.markForCheck();

    console.log('ngOnInit in grandChild');
  }

  ngDoCheck(): void {
    if (this.cities.length !== this.prevLength) {
      this.prevLength = this.cities.length;
    }
    console.log('ngDoCheck grandChild');
  }
}
