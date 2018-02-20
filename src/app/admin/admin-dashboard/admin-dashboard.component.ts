import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ADMIN_SIDE_NAV } from '../../core/bo/admin-side-nav';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  readonly categories =  ADMIN_SIDE_NAV;
>>>>>>> 6d9b1941aab9c21fcdd0d749b989edf732aee491

  constructor(private router: Router) {
   }

  ngOnInit() {}
}
