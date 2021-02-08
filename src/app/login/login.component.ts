import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private formBuilder: FormBuilder ) { }
  authForm: FormGroup;
  correctForm: FormGroup
  isWrong  =  false;
  username: string;
  password: string;

  ngOnInit() {
}

  get formControls() { return this.authForm.controls; }

  onSubmit(): void{
    if(this.username === 'hello' && this.password === 'world'){
      this.router.navigateByUrl('/user');
    }
    else{
      this.isWrong = true;
    }
  }

  onSignUp(): void{
    this.router.navigateByUrl('/sign-up');
  }

}
