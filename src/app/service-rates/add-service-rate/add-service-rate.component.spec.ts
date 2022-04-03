import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceRateComponent } from './add-service-rate.component';

describe('AddServiceRateComponent', () => {
  let component: AddServiceRateComponent;
  let fixture: ComponentFixture<AddServiceRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
