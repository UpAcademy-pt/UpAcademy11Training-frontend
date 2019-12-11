import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserToolsViewComponent } from './user-tools-view.component';

describe('UserToolsViewComponent', () => {
  let component: UserToolsViewComponent;
  let fixture: ComponentFixture<UserToolsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserToolsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserToolsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
