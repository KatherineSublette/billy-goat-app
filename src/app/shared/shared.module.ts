import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';  
import { MatButtonToggleModule } from '@angular/material/button-toggle';  
import { MatGridListModule} from '@angular/material/grid-list';  

import { CommonModule } from '@angular/common';  

import { OpenJobPageComponent } from './open-job-page/open-job-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { PreviousPageComponent } from './previous-page/previous-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    OpenJobPageComponent,
    MessagesPageComponent,
    PreviousPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    CommonModule
  ],
  exports: [
    OpenJobPageComponent,
    MessagesPageComponent,
    PreviousPageComponent,
    ProfilePageComponent,
  ]
})
export class SharedModule { }