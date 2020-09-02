import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable()
export class SalesmanRegistrationSvcService {

  constructor(private http:HttpClient) { }

  public doRegistrationSalesman(salesman)
  {
      return this.http.post(`${environment.apiUrl}saveSalesman`,salesman,{responseType: 'text' as 'json'});
  }

}
