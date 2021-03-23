import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';  

import { HomePageComponent } from './home-page/home-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { PreviousPageComponent } from './previous-page/previous-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MessagesPageComponent,
    PreviousPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HomePageComponent,
    MessagesPageComponent,
    PreviousPageComponent,
    ProfilePageComponent,
  ]
})
export class SharedModule { }