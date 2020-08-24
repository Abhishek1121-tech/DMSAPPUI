import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {httpOptions} from './headers';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillingCreationSvcService {

  constructor(private http:HttpClient) { }
  public doBillCreation(billing,mobile)
  {
    return this.http.post(`http://localhost:8080/saveBill?mobile=${mobile}`,billing,{responseType: 'text' as 'json'});
  }

  public searchCustomerByMobile(mobile)
  {
     let httpheaders = httpOptions;
        
    return this.http.get(`http://localhost:8080/searchCustomerByMobile?mobile=${mobile}`,  httpheaders ).pipe(delay(2000));
  }
}
