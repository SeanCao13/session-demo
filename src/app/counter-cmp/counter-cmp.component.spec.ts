import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCmpComponent } from './counter-cmp.component';

describe('CounterCmpComponent', () => {
  let component: CounterCmpComponent;
  let fixture: ComponentFixture<CounterCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
