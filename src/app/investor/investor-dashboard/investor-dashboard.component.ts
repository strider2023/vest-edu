import { Component, OnInit } from '@angular/core';

import { INVESTOR_SIDE_NAV } from '../../core/bo/investor-side-nav';

@Component({
  selector: 'app-investor-dashboard',
  templateUrl: './investor-dashboard.component.html',
  styleUrls: ['./investor-dashboard.component.scss']
})
export class InvestorDashboardComponent implements OnInit {

  readonly categories = INVESTOR_SIDE_NAV;

  constructor() { }

  ngOnInit() {
  }

}
