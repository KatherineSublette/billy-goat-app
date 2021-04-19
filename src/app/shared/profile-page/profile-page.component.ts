import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest.model';
import { Guide } from 'src/app/models/guide.model';
import { User } from 'src/app/models/user.model';
import { GuestService } from 'src/app/services/guest.service';
import { GuideService } from 'src/app/services/guide.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  //let obj = JSON.parse(jsonString);
  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private guide: Guide;
  private guest: Guest;
  private user: User;
  private isEdit: boolean = false;
  firstname: string;
  lastname: string;
  email: string;
  constructor(private guestService: GuestService, private guideService: GuideService, private userService: UserService, private toastr: ToastrService) { 
    this.user = JSON.parse(this.jwtUser.user);
    this.firstname = this.user.firstName;
    this.lastname = this.user.lastName;
    this.email = this.user.email;
    console.log(this.user);
    if(this.user.userType === 1){
      console.log(this.user);
      this.guideService.getGuideByUserId(this.user.id).subscribe(
        (guide: Guide) => {
          this.guide = guide;
        }
      );
    }
    else{
      this.guestService.getGuestByUserId(this.user.id).subscribe(
        (guest: Guest) => {
          this.guest = guest;
        }
      );
    }
  }

  ngOnInit(): void {

  }

  edit(): void{
    this.isEdit = true;
  }

  onSave(): void{
    console.log("firstname: " + this.firstname);
    console.log("lastname: " + this.lastname);
    console.log("email: " + this.email);

    this.user.firstName = this.firstname;
    this.user.lastName = this.lastname;
    this.user.email = this.email;
    
    console.log(this.user)
    this.userService.updateUser(this.user).subscribe(
      (updatedUser: User) => {
        if(updatedUser.userType === 2){
          //guest
          this.guest.firstName = this.firstname;
          this.guest.lastName = this.lastname;
          this.guest.email = this.email;

          this.guestService.updateGuest(this.guest).subscribe(
            (updatedGuest: Guest) => {
              this.toastr.success('guest updated successfully');
              this.isEdit = false;
            },
            (error) => {
              this.toastr.error('Error updating guest.');
            }
          )
        }
        else{
          //guide
          console.log("")
          this.guide.firstName = this.firstname;
          this.guide.lastName = this.lastname;
          this.guide.email = this.email;
          this.guideService.updateGuide(this.guide).subscribe(
            (updatedGuide: Guide) => {
              this.toastr.success('guide updated successfully');
              this.isEdit = false;
            },
            (error) => {
              this.toastr.error('Error updating guide.');
            }
          )
        }
      },
          (error) => {
            this.toastr.error('Error adding User.');
          }
    );

    this.isEdit = false;
  }

}
