import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeesComponent } from './editemployees.component';

describe('EditemployeesComponent', () => {
  let component: EditemployeesComponent;
  let fixture: ComponentFixture<EditemployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditemployeesComponent]
    });
    fixture = TestBed.createComponent(EditemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
