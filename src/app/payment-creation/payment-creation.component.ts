import { Component, OnInit, ViewChild } from '@angular/core';
import { BillingCreationSvcService } from '../billing-creation-svc.service';
import { PaymentCreationSvcService } from '../payment-creation-svc.service';
import { MobileWrapper, MobileWrapper_INIT } from '../wrapperMobile';
import { Billing } from '../billing';
import { Customer } from '../customer';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { Payment } from '../Payment';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-payment-creation',
  templateUrl: './payment-creation.component.html',
  styleUrls: ['./payment-creation.component.css']
})
export class PaymentCreationComponent implements OnInit {

  payment: Billing=new Billing(0,"");
  message:any;
  customer: Customer= new Customer("",0,"",0);
  public customerCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword */
   public customerFilterCtrl: FormControl = new FormControl();
 
   /** list of banks filtered by search keyword */
   public filteredCustomers: ReplaySubject<MobileWrapper[]> = new ReplaySubject<MobileWrapper[]>(1);
 
   @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
 
   /** Subject that emits when the component has been destroyed. */
   protected _onDestroy = new Subject<void>();
  mobileNumberList: MobileWrapper[]=MobileWrapper_INIT;
  
  constructor(private billingService:BillingCreationSvcService, private paymentService:PaymentCreationSvcService) { }

  ngOnInit() {

    this.customerCtrl.setValue(this.mobileNumberList[10]);
     
    // load the initial bank list
   this.filteredCustomers.next(this.mobileNumberList);
    console.log("customerFilterCtrl"+this.customerFilterCtrl.value)
    // listen for search field value changes
    this.customerFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterMobiles();
      });
  }


  ngAfterViewInit() {
    this.setInitialValue();
   
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredCustomers
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: any, b: any) => a && b && a.mobile === b.mobile;
      });
  }

  protected  filterMobiles() {
   

    if (!this.mobileNumberList) {
      return;
    }
    // get the search keyword
   
    let search = this.customerFilterCtrl.value;
   
    
    
    if (!search) {
      this.filteredCustomers.next(this.mobileNumberList);
      return;
    } else {
      console.log("search"+search);
      search = search;
    }
    this.loadDataInMobileList(search)
    // filter the banks
  
    this.filteredCustomers.next(
      this.mobileNumberList
    );
  }
  public  makePayment(){
    console.log("mobile"+this.customer.mobile)
    let response_url=this.paymentService.doPaymentCreation(this.payment,this.customer.mobile);
    response_url.subscribe((data)=>this.message=data);
    this.payment.billAmount=null;
    this.payment.descriptionRemarks=null;
  }
  onChangeValue(customerMobile){
    console.log("abc1111"+this.customerCtrl.value.mobile);
      this.customer.mobile=this.customerCtrl.value.mobile;
  }

  loadDataInMobileList(search){
    this.billingService.searchCustomerByMobile(search).subscribe((data:[])=>{console.log("data"+data);while(this.mobileNumberList.length) {
      this.mobileNumberList.pop()}     for (let key in data) if (data.hasOwnProperty(key))  this.mobileNumberList.push(data[key]);});
  }

}
