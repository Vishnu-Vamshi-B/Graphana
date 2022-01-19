import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMetricsFormComponent } from './edit-metrics-form.component';

describe('EditMetricsFormComponent', () => {
  let component: EditMetricsFormComponent;
  let fixture: ComponentFixture<EditMetricsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMetricsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMetricsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
