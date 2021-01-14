import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-grand-child',
  templateUrl: './grand-grand-child.component.html',
  styleUrls: ['./grand-grand-child.component.scss'],
})
export class GrandGrandChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit in grand grand child');
  }
  ngDoCheck(): void {
      console.log('ngDoCheck grand grand child');
    }
}
