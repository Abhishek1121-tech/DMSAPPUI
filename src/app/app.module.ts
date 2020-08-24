import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SalesmanRegistrationComponent } from './salesman-registration/salesman-registration.component';
import { SalesmanRegistrationSvcService } from './salesman-registration-svc.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerRegistrationSvcService } from './customer-registration-svc.service';
import {MatSelectModule} from '@angular/material/select';
import { BillingCreationComponent } from './billing-creation/billing-creation.component'
import { BillingCreationSvcService } from './billing-creation-svc.service';
import { PaymentCreationComponent } from './payment-creation/payment-creation.component';
import { PaymentCreationSvcService } from './payment-creation-svc.service';


@NgModule({
  declarations: [
    AppComponent,
    SalesmanRegistrationComponent,
    CustomerRegistrationComponent,
    BillingCreationComponent,
    PaymentCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMatSelectSearchModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [SalesmanRegistrationSvcService,CustomerRegistrationSvcService,BillingCreationSvcService,PaymentCreationSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
