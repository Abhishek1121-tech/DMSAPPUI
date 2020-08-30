import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesmanRegistrationComponent } from './salesman-registration/salesman-registration.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { BillingCreationComponent } from './billing-creation/billing-creation.component';
import { PaymentCreationComponent } from './payment-creation/payment-creation.component';
import { ExpenseCreationComponent } from './expense-creation/expense-creation.component';
import { ReportCreationRequestFormComponent } from './report-creation-request-form/report-creation-request-form.component';
import { ReportListViewPagginationComponent } from './report-list-view-paggination/report-list-view-paggination.component';


const routes: Routes = [
  {path:"",redirectTo:"salesmanregister",pathMatch:"full"},
  {path:"salesmanregister",component:SalesmanRegistrationComponent},
  {path:"customerregister",component:CustomerRegistrationComponent},
  {path:"customerbillCreation",component:BillingCreationComponent},
  {path:"customerpaymentCreation",component:PaymentCreationComponent},
  {path:"expenseCreation",component:ExpenseCreationComponent},
  {path:"reportGenerationRequest",component:ReportCreationRequestFormComponent},
  {path:"reportStatusListPage",component:ReportListViewPagginationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }