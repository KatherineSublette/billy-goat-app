import { Component, OnInit} from '@angular/core';
import { Router } from  '@angular/router';
import { LoginResponse } from '../models/loginResponse.model';
import { UserJWT } from '../models/userJWT.model';
import { AuthService } from '../services/auth.service';

import jwt_decode from 'jwt-decode';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService ) { }
  isWrong  =  false;
  username: string;
  password: string;

  ngOnInit() {
  }

  onSubmit(): void{

    this.authService.login(this.username, this.password).subscribe(
      (loginResponse: LoginResponse) => {
        // decode jwt
        const user: UserJWT = jwt_decode(loginResponse.jwt)

        // set local storage
        sessionStorage.setItem("access_token", loginResponse.jwt);
        sessionStorage.setItem("user", JSON.stringify(user));
        if(user.userType  === 'Guide'){
          this.router.navigateByUrl('/guide');
        }
        else {
          this.router.navigateByUrl('/guest');
        }

      },
      (err => {
        // show toastr
        console.log("unable to authenticate user")
      })
    );
  }

  onSignUp(): void{
    this.router.navigateByUrl('/sign-up');
  }

  checkIsWrong(): boolean{
    return this.isWrong;
  }

}
