import { Component, OnInit } from '@angular/core';

import { BORROWER_SIDE_NAV } from '../../core/bo/borrower-side-nav';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  readonly categories = BORROWER_SIDE_NAV;

  country = [
    { value: 'United States - 0', countryname: 'United States' },
    { value: 'New Zealand - 1', countryname: 'New Zealand' },
    { value: 'Australia-2', countryname: 'Australia' },
    { value: 'India-3', countryname: 'India' },
    { value: 'Ireland-4', countryname: 'Ireland' }
  ];

  city = [
    { value: 'hyderabad - 0', cityname: 'Hyderabad' },
    { value: 'bengaluru - 1', cityname: 'Bengaluru' },
    { value: 'khammam - 2', cityname: 'Khammam' },
    { value: 'mumbai - 3', cityname: 'Mumbai' },
    { value: 'pune - 4', cityname: 'Pune' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
