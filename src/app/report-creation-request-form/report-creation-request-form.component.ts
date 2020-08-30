import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportCreationRequestFormSvcService } from '../report-creation-request-form-svc.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { reportGenerationTypeWrapper, reportGenerationSelectionTypeWrapper } from '../ReportGenerationWrapper';
import { ReportEntry } from '../ReportEntry';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';;

@Component({
  selector: 'app-report-creation-request-form',
  templateUrl: './report-creation-request-form.component.html',
  styleUrls: ['./report-creation-request-form.component.css']
})
export class ReportCreationRequestFormComponent implements OnInit  {
 
  message:any;
  reportTypeLists:any=reportGenerationTypeWrapper;
  reportSelectionTypeLists: any=reportGenerationSelectionTypeWrapper;
  reportEntryModel: ReportEntry=new ReportEntry("","","QUEUED",0,0);

  minDate: Date;
  maxDate: Date;
  form = new FormGroup({
    reportTypeCtrl: new FormControl('', Validators.required),
    selectionTypeCtrl: new FormControl('', Validators.required),
    reportDateRange: this.formBuilder.group({
      startDate: '',
      endDate: ''
    }),
  });


  
  
  get f(){
    return this.form.controls;
  }
  constructor(private formBuilder: FormBuilder,private serviceReportGenerationService:ReportCreationRequestFormSvcService) { }

 
  makeRequestReportGeneration(){
    this.setReportEntryModelValues();
    let response_url=this.serviceReportGenerationService.doReportRequest(this.reportEntryModel);
    response_url.subscribe(data=>this.message=data);
    this.form.controls.reportTypeCtrl.setValue(1);
    this.form.controls.selectionTypeCtrl.setValue(1);
    this.form.controls.reportDateRange=this.formBuilder.group({
      startDate: '',
      endDate: ''
    });
  }
  
  changereportTypeCtrl(event){
    console.log(event.target.value);
    this.reportEntryModel.reportType=event.target.value
  }

  changeselectionTypeCtrl(event){
    console.log(event.target.value);
    this.reportEntryModel.reportSelectionType=event.target.value
  }
  ngOnInit() {
    this.form.controls.reportTypeCtrl.setValue(1);
    this.form.controls.selectionTypeCtrl.setValue(1);
    const currentYear = new Date().getFullYear();
  this.minDate = new Date(currentYear - 1, 0, 1);
  this.maxDate = new Date(currentYear + 1, 11, 31);
    
  }

  setReportEntryModelValues()
  {
    if ((this.f.reportDateRange.value.startDate != '' || this.f.reportDateRange.value.startDate != null) || (this.f.reportDateRange.value.endTime!='' ||this.f.reportDateRange.value.endTime!=null))
    {
    let startTime = new Date(this.f.reportDateRange.value.startDate);
    let endTime = new Date(this.f.reportDateRange.value.endDate);
    this.reportEntryModel.reportStartRangeTimestampInMs=startTime.getTime();
    this.reportEntryModel.reportEndRangeTimestampInMs=endTime.getTime();
    }
  }
  
  }
