import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServiceRatesComponent } from './list-service-rates/list-service-rates.component';
import { AddServiceRateComponent } from './add-service-rate/add-service-rate.component';
import { ViewServiceRateComponent } from './view-service-rate/view-service-rate.component';
import { DeleteServiceRateComponent } from './delete-service-rate/delete-service-rate.component';
import { EditServiceRateComponent } from './edit-service-rate/edit-service-rate.component';



@NgModule({
  declarations: [
    ListServiceRatesComponent,
    AddServiceRateComponent,
    ViewServiceRateComponent,
    DeleteServiceRateComponent,
    EditServiceRateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListServiceRatesComponent,
    AddServiceRateComponent,
    ViewServiceRateComponent,
    DeleteServiceRateComponent,
    EditServiceRateComponent
  ]
})
export class ServiceRatesModule { }
