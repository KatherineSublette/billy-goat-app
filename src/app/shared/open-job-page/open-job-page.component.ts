import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest.model';
import { Guide } from 'src/app/models/guide.model';
import { GuestService } from 'src/app/services/guest.service';
import { GuideService } from 'src/app/services/guide.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './open-job-page.component.html',
  styleUrls: ['./open-job-page.component.css']
})
export class OpenJobPageComponent implements OnInit {
  @Input() text: string;
  @Input() display: string;
  private users: any[];
  private displayedColumns: string[] = ['name', 'email'];
  constructor( private guestService: GuestService, private guideService: GuideService) { }

  ngOnInit(): void {  
    console.log(this.display);
    if(this.display === "guests"){
      this.guestService.getGuests().subscribe(
        (guests: Guest[]) => {
          this.users = guests
        }
      );
    }

    if(this.display === "guides"){
      this.guideService.getGuides().subscribe(
        (guides: Guide[]) => {
          this.users = guides
        }
      );
    }

  }


}
