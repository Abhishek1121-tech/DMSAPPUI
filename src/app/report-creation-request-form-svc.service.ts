import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportCreationRequestFormSvcService {

  constructor(private http:HttpClient) { }

  public doReportRequest(reportEntry)
  {
      return this.http.post("http://localhost:8080/saveReportRequest",reportEntry,{responseType: 'text' as 'json'});
  }
}
