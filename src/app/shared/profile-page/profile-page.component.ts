import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest.model';
import { Guide } from 'src/app/models/guide.model';
import { User } from 'src/app/models/user.model';
import { GuestService } from 'src/app/services/guest.service';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private user: User = JSON.parse(sessionStorage.getItem("user"));
  private gUser: any;
  constructor(private guestService: GuestService, private guideService: GuideService) { 
    if(this.user.userType  === 'Guide'){
      this.guideService.getGuideByUserId(Number(this.user.userid)).subscribe(
        (guide: Guide) => {
          this.gUser = guide;
        }
      );
    }
    else{
      this.guestService.getGuestByUserId(Number(this.user.userid)).subscribe(
        (guest: Guest) => {
          this.gUser = guest;
        }
      );
    }
  }

  ngOnInit(): void {

  }

}
