import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule
  
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule {}
