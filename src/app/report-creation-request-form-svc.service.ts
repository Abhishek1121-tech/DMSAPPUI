import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReportCreationRequestFormSvcService {

  constructor(private http:HttpClient) { }

  public doReportRequest(reportEntry)
  {
      return this.http.post(`${environment.apiUrl}saveReportRequest`,reportEntry,{responseType: 'text' as 'json'});
  }
}
