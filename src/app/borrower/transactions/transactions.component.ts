import { Component, OnInit } from '@angular/core';

import { BORROWER_SIDE_NAV } from '../../core/bo/borrower-side-nav';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  readonly categories = BORROWER_SIDE_NAV;

  constructor() { }

  ngOnInit() {
  }

}
