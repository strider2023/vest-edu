import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { BORROWER_SIDE_NAV } from '../../core/bo/borrower-side-nav';
import { LoansService } from './services/loans.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit, AfterViewInit {

  readonly categories = BORROWER_SIDE_NAV;
  displayedColumns = ['id', 'loanId', 'amount', 'startDate', 'endDate', 'status', 'view'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private loanServices: LoansService) { }

  ngOnInit() {
    this.loanServices.getUserLoanDetails()
      .subscribe(
        (loanData) => {
          this.dataSource = loanData;
        }
      );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
