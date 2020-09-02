import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {httpOptions} from './headers';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BillingCreationSvcService {

  constructor(private http:HttpClient) { }
  public doBillCreation(billing,mobile)
  {
    return this.http.post(`${environment.apiUrl}saveBill?mobile=${mobile}`,billing,{responseType: 'text' as 'json'});
  }

  public searchCustomerByMobile(mobile)
  {
     let httpheaders = httpOptions;
        
    return this.http.get(`${environment.apiUrl}searchCustomerByMobile?mobile=${mobile}`,  httpheaders ).pipe(delay(2000));
  }
}
