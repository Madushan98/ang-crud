import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceRateComponent } from './view-service-rate.component';

describe('ViewServiceRateComponent', () => {
  let component: ViewServiceRateComponent;
  let fixture: ComponentFixture<ViewServiceRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServiceRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
