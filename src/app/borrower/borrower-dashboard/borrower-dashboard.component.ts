import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-borrower-dashboard',
  templateUrl: './borrower-dashboard.component.html',
  styleUrls: ['./borrower-dashboard.component.scss']
})
export class BorrowerDashboardComponent implements OnInit {
  categories = [
    { icon: 'dashboard', list: 'My Dashboard', link: '' },
    { icon: 'person', list: 'My Profile', link: '' },
    { icon: 'credit_card', list: 'My Loans', link: '' },
    { icon: 'account_balance', list: 'Apply a New Loan', link: '' },
    { icon: 'credit_card', list: 'Transaction History', link: '' },
    { icon: 'settings', list: 'My Account', link: '' }
  ];

  constructor() {}

  ngOnInit() {}
}
