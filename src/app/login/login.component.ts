import { Component, OnInit} from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router ) { }
  isWrong  =  false;
  username: string;
  password: string;

  ngOnInit() {
  }

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

  checkIsWrong(): boolean{
    return this.isWrong;
  }

}
