import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentCreationSvcService {

  constructor(private http:HttpClient) { }

  doPaymentCreation(payment,mobile){
    return this.http.post(`http://localhost:8080/savePayment?mobile=${mobile}`,payment,{responseType: 'text' as 'json'});
  }
}
