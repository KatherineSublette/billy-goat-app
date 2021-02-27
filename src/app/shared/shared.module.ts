import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { PreviousPageComponent } from './previous-page/previous-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MessagesPageComponent,
    PreviousPageComponent,
    ProfilePageComponent
  ],
  imports: [
  ],
  exports: [
    HomePageComponent,
    MessagesPageComponent,
    PreviousPageComponent,
    ProfilePageComponent
  ]
})
export class SharedModule { }