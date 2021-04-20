import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';  
import { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';  
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GuestHomeComponent } from './guest/guest-home/guest-home.component';
import { GuideHomeComponent } from './guide/guide-home/guide-home.component';
import { LoginComponent } from './login/login.component';
import { MyJobsPageComponent } from './guide/my-jobs-page/my-jobs-page.component';
import { AuthService } from './services/auth.service';
import { JwtInterceptor } from './shared/jwt.interceptor';

import { SharedModule } from './shared/shared.module';
import { MyTripsPageComponent } from './guest/my-trips-page/my-trips-page.component';
import { CompletedTripsPageComponent } from './guest/completed-trips-page/completed-trips-page.component';
import { NewJobModalComponent } from './guest/new-job-modal/new-job-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    GuestHomeComponent,
    GuideHomeComponent,
    LoginComponent,
    MyJobsPageComponent,
    MyTripsPageComponent,
    CompletedTripsPageComponent,
    NewJobModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    AuthService,
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
