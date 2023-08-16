import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEditComponent } from './staff-edit.component';

describe('StaffEditComponent', () => {
  let component: StaffEditComponent;
  let fixture: ComponentFixture<StaffEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffEditComponent]
    });
    fixture = TestBed.createComponent(StaffEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
