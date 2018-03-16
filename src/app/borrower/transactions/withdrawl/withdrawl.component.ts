import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-withdrawl',
  templateUrl: './withdrawl.component.html',
  styleUrls: ['./withdrawl.component.scss']
})
export class WithdrawlComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'date', 'status', 'amount'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface Element {
  date: string;
  position: number;
  status: string;
  amount: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 2, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 3, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 4, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 5, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 6, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 7, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 8, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 9, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 10, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 11, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 12, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 13, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 14, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 15, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 16, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 17, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 18, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 19, date: '12/1/2017', status: 'Complete', amount: '200' },
  { position: 20, date: '12/1/2017', status: 'Complete', amount: '200' },
];
