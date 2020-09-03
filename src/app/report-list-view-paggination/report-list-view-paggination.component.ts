import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportListViewPagginationSvcService } from '../report-list-view-paggination-svc.service';
import { Subscription } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { ButtonRendererComponent } from '../renderer/ButtonRendererComponent';

import { saveAs } from 'file-saver';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-report-list-view-paggination',
  templateUrl: './report-list-view-paggination.component.html',
  styleUrls: ['./report-list-view-paggination.component.css']
})
export class ReportListViewPagginationComponent implements OnInit {

  @ViewChild('myGrid') myGrid: AgGridAngular;

  public gridOptions: Partial<GridOptions>;
  public gridApi;
  public gridColumnApi;
  public columnDefs;
  public cacheOverflowSize;
  public maxConcurrentDatasourceRequests;
  public infiniteInitialRowCount;

  rowData: any=[];
  countRows:any;
  frameworkComponents: any;
  rowDataClicked1: any;





  constructor(public serviceReportListViewSvc:ReportListViewPagginationSvcService,private router: Router) { 

   
  
   

    var tooltipRenderer = function(params)
{
    return '<span title="' + params.value + '">'+params.value+'</span>';
};

    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 2;
    this.infiniteInitialRowCount = 2;

    this.gridOptions = {
      headerHeight: 45,
      rowHeight: 30,
      cacheBlockSize: 10,
      paginationPageSize: 10,
      rowModelType: 'infinite',
    }

  }


  refresh() {
    this.router.navigate(['same-route-here']);
    this.ngOnInit();   }

  onGridReady(params) {
    console.log('On Grid Ready');

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    params.api.setGridAutoHeight(true);
    var datasource = {
      getRows: (params_rows: IGetRowsParams) => {
        console.log("Fetching startRow " + params_rows.startRow + " of " + params_rows.endRow);
        console.log(params_rows);
        this.serviceReportListViewSvc.getReportsByPagination(params_rows,this.gridOptions.api.paginationGetCurrentPage())
          .subscribe(data => { 
            console.log(data);
            while(this.rowData.length) {
              this.rowData.pop()} 
            for (let key in data) this.rowData.push(data[key]);
            params_rows.successCallback(this.rowData, this.countRows); 
          });
      }
    }

    this.gridApi.setDatasource(datasource);
  }

  onPaginationChanged(ev) {

  }


  
  ngOnInit() {
    this.serviceReportListViewSvc.getCountReports().subscribe(data => { 
      console.log(data);this.countRows=data});     
      this.columnDefs = [
        { headerName: 'Report ID', field: 'id'},
        { headerName: 'Report Name', field: 'reportName',resizable: true},
        { headerName: 'Report Type', field: 'reportType'},
        { headerName: 'Selection Type', field: 'reportSelectionType' },
        { headerName: 'Failed Reason', field: 'gender' ,resizable: true},
        { headerName: 'Report Status', field: 'reportStatus' },
        { headerName: 'Download URL', cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onBtnClick1.bind(this),
          label: 'Download Report'
        } },
        { headerName: 'Report Creation Date', field: 'reportCreationDate', sresizable: true,cellRenderer: (data) => {
          return data.value ? ((new Date(data.value)).toLocaleDateString()+" "+(new Date(data.value)).toLocaleTimeString()) : '';
     } },
      ];
      this.frameworkComponents = {
        buttonRenderer: ButtonRendererComponent,
      }
  
  }
  onBtnClick1(e) {
    console.log("here",e.rowData.reportDownloadURL);
    const getFilename_pieces=e.rowData.reportDownloadURL.split(/[\s/]+/);
    //console.log("pieces",getFilename_pieces)
    let response_url=this.serviceReportListViewSvc.downloadReport(e.rowData.reportDownloadURL);
    response_url.subscribe(response => this.downLoadFile(response,getFilename_pieces[getFilename_pieces.length-1]));
  }

  
  public downLoadFile(response: any, fileName?: string) {
    const blob = new Blob([response.body], { type: response.headers.get('content-type') });
    fileName = fileName || response.headers.get('content-disposition').split(';')[0];
    const file = new File([blob], fileName, { type: response.headers.get('content-type') });
    saveAs(file);
}
}
