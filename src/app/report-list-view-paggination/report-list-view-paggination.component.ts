import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportListViewPagginationSvcService } from '../report-list-view-paggination-svc.service';
import { Subscription } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';
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
  userSubscriber: Subscription;

  rowData: any=[];
  countRows:any;

  constructor(public serviceReportListViewSvc:ReportListViewPagginationSvcService) { 

    this.columnDefs = [
      { headerName: 'Report ID', field: 'id' },
      { headerName: 'Report Name', field: 'reportName',resizable: true},
      { headerName: 'Report Type', field: 'reportType'},
      { headerName: 'Selection Type', field: 'reportSelectionType' },
      { headerName: 'Failed Reason', field: 'gender' ,resizable: true},
      { headerName: 'Report Status', field: 'reportStatus' },
      { headerName: 'Download URL', field: 'reportDownloadURL',resizable: true },
      { headerName: 'Report Creation Date', field: 'reportCreationDate',resizable: true,cellRenderer: (data) => {
        return data.value ? ((new Date(data.value)).toLocaleDateString()+" "+(new Date(data.value)).toLocaleTimeString()) : '';
   } },
    ];

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


      
  }

}
