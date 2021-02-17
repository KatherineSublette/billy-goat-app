import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { Router } from  '@angular/router';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }
  fullname: string;
  username: string;
  password: string;
  email: string;

  ngOnInit(): void {
  }

  onSubmit(): void{
    
  }

}
