import { Component, OnInit } from '@angular/core';
import { Salesman } from '../salesman';
import { SalesmanRegistrationSvcService } from '../salesman-registration-svc.service';

@Component({
  selector: 'app-salesman-registration',
  templateUrl: './salesman-registration.component.html',
  styleUrls: ['./salesman-registration.component.css']
})
export class SalesmanRegistrationComponent implements OnInit {

  salesman: Salesman = new Salesman("",0,0);
  message:any;
  constructor(private salesmanservice:SalesmanRegistrationSvcService) { }

  ngOnInit() {
  }

  public  registerNow(){
    let response_url=this.salesmanservice.doRegistrationSalesman(this.salesman);
    response_url.subscribe((data)=>this.message=data);
    this.salesman.name=null;
    this.salesman.mobile=null;
    this.salesman.target=null;
  }
}
