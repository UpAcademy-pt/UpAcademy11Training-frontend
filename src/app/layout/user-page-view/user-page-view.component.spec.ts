import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageViewComponent } from './user-page-view.component';

describe('UserPageViewComponent', () => {
  let component: UserPageViewComponent;
  let fixture: ComponentFixture<UserPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
