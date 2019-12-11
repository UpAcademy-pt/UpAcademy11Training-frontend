import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateSessionViewComponent } from './admin-create-session-view.component';

describe('AdminCreateSessionViewComponent', () => {
  let component: AdminCreateSessionViewComponent;
  let fixture: ComponentFixture<AdminCreateSessionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateSessionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateSessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
