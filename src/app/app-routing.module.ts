import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesmanRegistrationComponent } from './salesman-registration/salesman-registration.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';


const routes: Routes = [
  {path:"",redirectTo:"salesmanregister",pathMatch:"full"},
  {path:"salesmanregister",component:SalesmanRegistrationComponent},
  {path:"customerregister",component:CustomerRegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }