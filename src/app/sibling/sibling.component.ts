import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit in sibling');
    setTimeout(() => {
      console.log('------set time out');
    }, 4000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck in sibling');
  }

}
