import { Component, OnInit } from '@angular/core';

import { ADMIN_SIDE_NAV } from '../../core/bo/admin-side-nav';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  readonly categories = ADMIN_SIDE_NAV;

  folders = [
    {
      name: 'Arindam Nath',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Ayan Halder',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Prakash',
      updated: new Date('1/28/16'),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
