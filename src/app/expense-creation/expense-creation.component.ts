import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpenseCreationSvcService } from '../expense-creation-svc.service';
import { Billing } from '../billing';
import { Customer } from '../customer';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MobileWrapper, MobileWrapper_INIT } from '../wrapperMobile';
import { MatSelect } from '@angular/material/select';
import { Expense } from '../expense';
import { ExpenseWrapper, expenseWrapper } from '../wrapperExpense';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-expense-creation',
  templateUrl: './expense-creation.component.html',
  styleUrls: ['./expense-creation.component.css']
})
export class ExpenseCreationComponent implements OnInit {


  expense: Expense=new Expense("",0,"");
  message:any;
  public expenseCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword */
   public expenseFilterCtrl: FormControl = new FormControl();
 
   /** list of banks filtered by search keyword */
   public filteredExpenses: ReplaySubject<ExpenseWrapper[]> = new ReplaySubject<ExpenseWrapper[]>(1);
 
   @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
 
   /** Subject that emits when the component has been destroyed. */
   protected _onDestroy = new Subject<void>();
  expensesList: ExpenseWrapper[]=expenseWrapper;
  constructor(private serviceExpense:ExpenseCreationSvcService) { }

  ngOnInit() {

    this.expenseCtrl.setValue(this.expensesList[0]);
     
    // load the initial bank list
   this.filteredExpenses.next(this.expensesList);
    // listen for search field value changes
    this.expenseFilterCtrl.valueChanges
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
    this.filteredExpenses
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect.compareWith = (a: any, b: any) => a && b && a.id === b.id;
      });
  }

  protected  filterMobiles() {
   
    console.log("expense"+this.expenseFilterCtrl.value.name);
    if (!this.expensesList) {
      return;
    }
    // get the search keyword
   
    let search = this.expenseFilterCtrl.value;
    console.log("expense"+search);
    
    
    if (!search) {
      this.filteredExpenses.next(this.expensesList);
      return;
    } else {
      console.log("search"+search);
      search = search;
    }
  
    this.filteredExpenses.next(
      this.expensesList.filter(expenseList=>expenseList.name.toLowerCase().indexOf(search.toLowerCase())>-1)
    );
  }

  makeExpense()
  {
    let response_url=this.serviceExpense.doExpenseCreation(this.expense);
    response_url.subscribe(data=>this.message=data);
  }

  onChangeValue(expenseWrapper){
    console.log("abc1111"+this.expenseCtrl.value.name);
      this.expense.expenseType=this.expenseCtrl.value.name;
  }
}
