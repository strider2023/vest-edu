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

  country = [
    {value: 'United States - 0', countryname: 'United States'},
    {value: 'New Zealand - 1', countryname: 'New Zealand'},
    {value: 'Australia-2', countryname: 'Australia'},
    {value: 'India-3', countryname: 'India'},
    {value: 'Ireland-4', countryname: 'Ireland'}
  ];

  city = [
    {value: 'hyderabad - 0', cityname: 'Hyderabad'},
    {value: 'bengaluru - 1', cityname: 'Bengaluru'},
    {value: 'khammam - 2', cityname: 'Khammam'},
    {value: 'mumbai - 3', cityname: 'Mumbai'},
    {value: 'pune - 4', cityname: 'Pune'}
  ];

  constructor() {}

  ngOnInit() {}
}
