import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/loginResponse.model';
import { UserJWT } from '../models/userJWT.model';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isWrong  =  false;
  form: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService ) {
      this.form = new FormGroup({
        username: new FormControl('', [ Validators.required, Validators.email ]),
        password: new FormControl('', [ Validators.required ]),
        token: new FormControl('', [ Validators.required ])
      });
    }
  ngOnInit() {
  }
  onSubmit(): void{
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    this.authService.login(username, password).subscribe(
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
        this.toastr.error('Unable to authenicate user.');
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