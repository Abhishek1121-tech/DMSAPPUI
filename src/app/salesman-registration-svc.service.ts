import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SalesmanRegistrationSvcService {

  constructor(private http:HttpClient) { }

  public doRegistrationSalesman(salesman)
  {
      return this.http.post("http://localhost:8080/saveSalesman",salesman,{responseType: 'text' as 'json'});
  }

}
