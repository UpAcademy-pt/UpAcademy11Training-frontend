import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageUsersViewComponent } from './admin-manage-users-view.component';

describe('AdminManageUsersViewComponent', () => {
  let component: AdminManageUsersViewComponent;
  let fixture: ComponentFixture<AdminManageUsersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageUsersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
