import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideNavComponent } from './side-nav/side-nav.component';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [SideNavComponent]
})
export class CoreModule { }
