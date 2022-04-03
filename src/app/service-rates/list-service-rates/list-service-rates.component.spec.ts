import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceRatesComponent } from './list-service-rates.component';

describe('ListServiceRatesComponent', () => {
  let component: ListServiceRatesComponent;
  let fixture: ComponentFixture<ListServiceRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServiceRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
