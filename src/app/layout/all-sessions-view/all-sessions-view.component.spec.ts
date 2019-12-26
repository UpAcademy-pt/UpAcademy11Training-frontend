import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSessionsViewComponent } from './all-sessions-view.component';

describe('AllSessionsViewComponent', () => {
  let component: AllSessionsViewComponent;
  let fixture: ComponentFixture<AllSessionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSessionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSessionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
