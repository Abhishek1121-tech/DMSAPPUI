import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {httpOptions} from './headers'
import { SalesManMobileWrapper } from './SalesManMobile';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationSvcService {

  constructor(private http:HttpClient) { }
  public doRegistrationCustomer(customer,mobile)
  {
      return this.http.post(`http://localhost:8080/saveCustomerDetail?mobile=${mobile}`,customer,{responseType: 'text' as 'json'});
  }

  public findAllSalesmanByMobile()
  {
     let httpheaders = httpOptions;
        
    return this.http.get(`http://localhost:8080/findAllSalesmanByMobile`,  httpheaders );
  }
  }

