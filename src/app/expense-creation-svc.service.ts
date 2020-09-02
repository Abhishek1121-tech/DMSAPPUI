import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCreationSvcService {

  constructor(private http:HttpClient) { }
  doExpenseCreation(expense)
  {
    return this.http.post(`${environment.apiUrl}saveExpense`,expense,{responseType: 'text' as 'json'});
  }
}
