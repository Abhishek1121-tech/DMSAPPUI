import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PaymentCreationSvcService {

  constructor(private http:HttpClient) { }

  doPaymentCreation(payment,mobile){
    return this.http.post(`${environment.apiUrl}savePayment?mobile=${mobile}`,payment,{responseType: 'text' as 'json'});
  }
}
