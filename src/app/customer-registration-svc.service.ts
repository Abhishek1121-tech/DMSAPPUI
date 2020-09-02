import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {httpOptions} from './headers'

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CustomerRegistrationSvcService {

  constructor(private http:HttpClient) { }
  public doRegistrationCustomer(customer,mobile)
  {
      return this.http.post(`${environment.apiUrl}saveCustomerDetail?mobile=${mobile}`,customer,{responseType: 'text' as 'json'});
  }

  public findAllSalesmanByMobile()
  {
     let httpheaders = httpOptions;
        
    return this.http.get(`${environment.apiUrl}findAllSalesmanByMobile`,  httpheaders );
  }
  }

