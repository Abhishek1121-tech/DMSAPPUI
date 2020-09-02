import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpOptions } from './headers';

@Injectable({
  providedIn: 'root'
})
export class ReportListViewPagginationSvcService {
  downloadReport(reportDownloadURL: any) {
    let httpheaders = httpOptions;
        
    return this.http.get(`http://localhost:8080/downloadReport?filename=${reportDownloadURL}`, {headers: httpheaders.headers,observe: 'response',
    responseType: 'arraybuffer'});
  }

  constructor(private http:HttpClient) { }

  public getReportsByPagination(params,pageNo)
  {
     let httpheaders = httpOptions;

     let page_size=params.endRow-params.startRow;
        
    return this.http.get(`http://localhost:8080/findAllReportByPaginationSort?pageNo=${pageNo}&pageSize=${page_size}`,  httpheaders );
  }


  public getCountReports()
  {
     let httpheaders = httpOptions;
        
    return this.http.get(`http://localhost:8080/findAllReports`,  httpheaders );
  }
}
