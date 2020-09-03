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
import { ExpenseCreationComponent } from './expense-creation/expense-creation.component';
import { ExpenseCreationSvcService } from './expense-creation-svc.service';
import { ReportCreationRequestFormComponent } from './report-creation-request-form/report-creation-request-form.component';
import { ReportCreationRequestFormSvcService } from './report-creation-request-form-svc.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatInputModule } from '@angular/material/input';
import { ReportListViewPagginationComponent } from './report-list-view-paggination/report-list-view-paggination.component'; 
import { ReportListViewPagginationSvcService } from './report-list-view-paggination-svc.service';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './renderer/ButtonRendererComponent';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesmanRegistrationComponent,
    CustomerRegistrationComponent,
    BillingCreationComponent,
    PaymentCreationComponent,
    ExpenseCreationComponent,
    ReportCreationRequestFormComponent,
    ReportListViewPagginationComponent,
    ButtonRendererComponent,
    HomeComponent,
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
    BsDatepickerModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    CoreModule
  ],
  providers: [SalesmanRegistrationSvcService,ReportListViewPagginationSvcService,CustomerRegistrationSvcService,BillingCreationSvcService,PaymentCreationSvcService,ExpenseCreationSvcService,ReportCreationRequestFormSvcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
