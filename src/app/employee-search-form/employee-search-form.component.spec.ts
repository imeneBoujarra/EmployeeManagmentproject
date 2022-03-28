import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchFormComponent } from './employee-search-form.component';

describe('EmployeeSearchFormComponent', () => {
  let component: EmployeeSearchFormComponent;
  let fixture: ComponentFixture<EmployeeSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
