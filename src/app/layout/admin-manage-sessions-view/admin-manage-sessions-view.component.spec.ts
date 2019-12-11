import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageSessionsViewComponent } from './admin-manage-sessions-view.component';

describe('AdminManageSessionsViewComponent', () => {
  let component: AdminManageSessionsViewComponent;
  let fixture: ComponentFixture<AdminManageSessionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageSessionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageSessionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
