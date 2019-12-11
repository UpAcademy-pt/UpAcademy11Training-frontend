import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySessionsViewComponent } from './day-sessions-view.component';

describe('DaySessionsViewComponent', () => {
  let component: DaySessionsViewComponent;
  let fixture: ComponentFixture<DaySessionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySessionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySessionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
