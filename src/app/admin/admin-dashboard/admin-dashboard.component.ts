import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ADMIN_SIDE_NAV } from '../../core/bo/admin-side-nav';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  readonly categories =  ADMIN_SIDE_NAV;

  constructor(private router: Router) {
   }

  ngOnInit() {}
}
