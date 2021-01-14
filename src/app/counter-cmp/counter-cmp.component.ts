import { ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-cmp',
  templateUrl: './counter-cmp.component.html',
  styleUrls: ['./counter-cmp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterCmpComponent implements OnInit {
  @Input() addItemStream: Observable<any>;
  counter = 0;
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.addItemStream.subscribe(() => {
      this.counter++;
      this.cd.markForCheck();
    })
  }
}
