import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesmanRegistrationComponent } from './salesman-registration/salesman-registration.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { BillingCreationComponent } from './billing-creation/billing-creation.component';
import { PaymentCreationComponent } from './payment-creation/payment-creation.component';


const routes: Routes = [
  {path:"",redirectTo:"salesmanregister",pathMatch:"full"},
  {path:"salesmanregister",component:SalesmanRegistrationComponent},
  {path:"customerregister",component:CustomerRegistrationComponent},
  {path:"customerbillCreation",component:BillingCreationComponent},
  {path:"customerpaymentCreation",component:PaymentCreationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }