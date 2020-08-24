import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseCreationSvcService {

  constructor(private http:HttpClient) { }
  doExpenseCreation(expense)
  {
    return this.http.post(`http://localhost:8080/saveExpense`,expense,{responseType: 'text' as 'json'});
  }
}
