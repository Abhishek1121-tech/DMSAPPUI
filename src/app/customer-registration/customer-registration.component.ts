import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CustomerRegistrationSvcService } from '../customer-registration-svc.service';
import { Customer } from '../customer';
import { SalesManMobileWrapper,SalesManMobileWrapper_INIT } from '../SalesManMobile';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { take, takeUntil } from 'rxjs/operators';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Salesman } from '../salesman';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit, AfterViewInit, OnDestroy {

  customer: Customer= new Customer("",0,"",0);
  //mobileNumberList: SalesManMobileWrapper[];
  //public mobileNumberLists:SalesManMobileWrapper[]=SalesManMobileWrapper_INIT;
  message:any;
  salesman: Salesman=  new Salesman("",7015826115,0);
  //public salesmanMobileNumber=this.salesman.mobile.valueOf();
   /** list of banks */
   


   /** control for the selected bank */
   public salesmanCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword */
   public salesmanFilterCtrl: FormControl = new FormControl();
 
   /** list of banks filtered by search keyword */
   public filteredSalesmans: ReplaySubject<SalesManMobileWrapper[]> = new ReplaySubject<SalesManMobileWrapper[]>(1);
 
   @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
 
   /** Subject that emits when the component has been destroyed. */
   protected _onDestroy = new Subject<void>();
  mobileNumberList: SalesManMobileWrapper[]=SalesManMobileWrapper_INIT;
  
  
  constructor(private customerService:CustomerRegistrationSvcService) { }

  ngOnInit() {
     // set initial selection
     this.salesmanCtrl.setValue(this.mobileNumberList[10]);
     
     // load the initial bank list
     this.customerService.findAllSalesmanByMobile().subscribe((data:[])=>{console.log(data);while(this.mobileNumberList.length) {
      this.mobileNumberList.pop()}     for (let key in data) if (data.hasOwnProperty(key))  this.mobileNumberList.push(data[key]);});
    console.log("avc"+this.mobileNumberList.length);
    


     this.filteredSalesmans.next(this.mobileNumberList);
 
     // listen for search field value changes
     this.salesmanFilterCtrl.valueChanges
       .pipe(takeUntil(this._onDestroy))
       .subscribe(() => {
         this.filterBanks();
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
    this.filteredSalesmans
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

  protected filterBanks() {
   
    if (!this.mobileNumberList) {
      return;
    }
    // get the search keyword
   
    let search = this.salesmanFilterCtrl.value;
    if (!search) {
      this.filteredSalesmans.next(this.mobileNumberList);
      return;
    } else {
      search = search;
    }
    // filter the banks
    this.filteredSalesmans.next(
      this.mobileNumberList.filter(mobileNumberLists => mobileNumberLists.mobile.toString().toLowerCase().indexOf(search) > -1)
    );
  }
  public  registerNow(){
    console.log("mobile"+this.salesman.mobile)
    let response_url=this.customerService.doRegistrationCustomer(this.customer,this.salesman.mobile);
    response_url.subscribe((data)=>this.message=data);
    this.customer.name=null;
    this.customer.mobile=null;
    this.customer.custArea=null;
    this.customer.creditLimit=null;
   
  }

  onChangeValue(salesmanMobile){
    console.log("abc1111"+this.salesmanCtrl.value.mobile);
      this.salesman.mobile=this.salesmanCtrl.value.mobile;
  }

  onClick(){
    this.customerService.findAllSalesmanByMobile().subscribe((data:[])=>{console.log(data);while(this.mobileNumberList.length) {
      this.mobileNumberList.pop()}     for (let key in data) if (data.hasOwnProperty(key))  this.mobileNumberList.push(data[key]);});
  }
}
