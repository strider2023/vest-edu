import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  showFiller = false;
  categories = [
    { icon: 'dashboard', list: 'My Dashboard', link: '' },
    { icon: 'person', list: 'My Profile', link: '' },
    { icon: 'credit_card', list: 'My Loans', link: '' },
    { icon: 'account_balance', list: 'Apply a New Loan', link: '' },
    { icon: 'credit_card', list: 'Transaction History', link: '' },
    { icon: 'settings', list: 'My Account', link: '' }
  ];

  constructor(private router: Router) { }

  constructor() {}

  ngOnInit() {}

  onNavOptionSelected(category) {
    if (category.list === 'My Loans') {
      this.router.navigate(['loans']);
    }
  }
}
