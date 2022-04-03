import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceRateComponent } from './delete-service-rate.component';

describe('DeleteServiceRateComponent', () => {
  let component: DeleteServiceRateComponent;
  let fixture: ComponentFixture<DeleteServiceRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteServiceRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
