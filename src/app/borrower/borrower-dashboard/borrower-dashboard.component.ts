import { Component, OnInit } from '@angular/core';

import { BORROWER_SIDE_NAV } from '../../core/bo/borrower-side-nav';

@Component({
  selector: 'app-borrower-dashboard',
  templateUrl: './borrower-dashboard.component.html',
  styleUrls: ['./borrower-dashboard.component.scss']
})
export class BorrowerDashboardComponent implements OnInit {

  readonly categories = BORROWER_SIDE_NAV;

  constructor() {}

  ngOnInit() {}
}
