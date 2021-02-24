import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GuestComponent } from './guest/guest.component';
import { GuideComponent } from './guide/guide.component';
import { GuideHomePageComponent } from './guide/guide-home-page/guide-home-page.component';
import { GuideOldJobsPageComponent } from './guide/guide-old-jobs-page/guide-old-jobs-page.component';
import { GuideMessagesPageComponent } from './guide/guide-messages-page/guide-messages-page.component';
import { GuideProfilePageComponent } from './guide/guide-profile-page/guide-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    GuestComponent,
    GuideComponent,
    GuideHomePageComponent,
    GuideOldJobsPageComponent,
    GuideMessagesPageComponent,
    GuideProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
