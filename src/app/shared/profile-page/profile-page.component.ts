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
  private user: User = JSON.parse(sessionStorage.getItem("user"));
  private gUser: any;
  private isEdit: boolean = false;
  firstname: string;
  lastname: string;
  email: string;
  constructor(private guestService: GuestService, private guideService: GuideService, private userService: UserService, private toastr: ToastrService) { 
    if(this.user.userType  === 'Guide'){
      this.guideService.getGuideByUserId(Number(this.user.userid)).subscribe(
        (guide: Guide) => {
          this.gUser = guide;
          this.firstname = this.gUser[0].firstName;
          this.lastname = this.gUser[0].lastName;
          this.email = this.user.email;
        }
      );
    }
    else{
      this.guestService.getGuestByUserId(Number(this.user.userid)).subscribe(
        (guest: Guest) => {
          this.gUser = guest;
          this.firstname = this.gUser[0].firstName;
          this.lastname = this.gUser[0].lastName;
          this.email = this.user.email;
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


    this.userService.addUser(this.user).subscribe(
      (updatedUser: User) => {
        if(updatedUser.userType === "Guest"){
          //guest
          this.gUser[0].firstName = this.firstname;
          this.gUser[0].lastName = this.lastname;
          this.gUser[0].email = this.email;

          this.guestService.updateGuest(this.gUser[0]).subscribe(
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
          this.gUser[0].firstName = this.firstname;
          this.gUser[0].lastName = this.lastname;
          this.gUser[0].email = this.email;
          this.guideService.updateGuide(this.gUser[0]).subscribe(
            (addedGuide: Guide) => {
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
