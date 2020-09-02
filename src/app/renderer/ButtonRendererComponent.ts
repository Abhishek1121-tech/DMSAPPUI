

import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-button-renderer',
  template: `<div *ngIf="!this.disableButton">
    <button type="button" (click)="onClick($event)">{{label}}</button>
    </div>`,
  styleUrls: ['./buttonrenderercomponent.component.css']
})

export class ButtonRendererComponent implements OnInit, ICellRendererAngularComp {
  ngOnInit() {
    
  }

  params;
  label: string;
  disableButton:any=false;

  agInit(params): void {
    this.params = params;  
    if (this.params.data !== undefined)
    {
      if (this.params.data.reportStatus != 'COMPLETED'){
        this.disableButton=true;
     }
    
   }
   
   
 
   
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {

      

      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }

}