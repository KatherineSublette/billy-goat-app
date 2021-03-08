import { Component, OnInit } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { ToastrService } from 'ngx-toastr';

import { Router } from  '@angular/router';
import { Guest } from '../models/guest.model';
import { Guide } from '../models/guide.model';
import { User } from '../models/user.model';

import { GuestService } from '../services/guest.service';
import { GuideService } from '../services/guide.service';
import { UserService } from '../services/user.service';

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

  constructor(private router: Router, 
              private userService: UserService,
              private guestService: GuestService,
              private guideService: GuideService,
              private toastr: ToastrService) { }
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  userType: string;

  ngOnInit(): void {
  }

  onSubmit(): void{
    let user = new User();
    user.firstName = this.firstname;
    user.lastName = this.lastname;
    user.email = this.email;
    user.username = this.email;
    user.password = this.password;
    user.userType = parseInt(this.userType);

    console.log(user.userType);

    this.userService.addUser(user).subscribe(
      (addedUser: User) => {
        if(addedUser.userType === 0){
          //guest
          let guest = new Guest();
          guest.firstName = this.firstname;
          guest.lastName = this.lastname;
          guest.email = this.email;
          guest.userid = addedUser.id;
          this.guestService.addGuest(guest).subscribe(
            (addedGuest: Guest) => {
              this.toastr.success('User added succesfully, login with your new credentials');
              this.router.navigateByUrl('/login');
            },
            (error) => {
              this.toastr.error('Error adding User.');
            }
          )
        }
        else{
          //guide
          let guide = new Guide();
          guide.firstName = this.firstname;
          guide.lastName = this.lastname;
          guide.email = this.email;
          guide.userid = addedUser.id;
          this.guideService.addGuide(guide).subscribe(
            (addedGuide: Guide) => {
              this.toastr.success('User added succesfully, login with your new credentials');
              this.router.navigateByUrl('/login');
            },
            (error) => {
              this.toastr.error('Error adding User.');
            }
          )
        }
      },
          (error) => {
            this.toastr.error('Error adding User.');
          }
    )
  }

}
