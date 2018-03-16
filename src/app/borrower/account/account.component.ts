import { Component, OnInit } from '@angular/core';

import { BORROWER_SIDE_NAV } from '../../core/bo/borrower-side-nav';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  hide = true;
  readonly categories = BORROWER_SIDE_NAV;

  constructor() { }

  ngOnInit() {
  }

}
