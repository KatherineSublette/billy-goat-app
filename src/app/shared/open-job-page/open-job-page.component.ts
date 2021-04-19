import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest.model';
import { Guide } from 'src/app/models/guide.model';
import { Job } from 'src/app/models/job.model';
import { User } from 'src/app/models/user.model';
import { GuestService } from 'src/app/services/guest.service';
import { GuideService } from 'src/app/services/guide.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './open-job-page.component.html',
  styleUrls: ['./open-job-page.component.css']
})
export class OpenJobPageComponent implements OnInit {
  @Input() text: string;
  @Input() display: string;
  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private user: User;
  private guest: Guest;
  private jobs: any[];
  private displayedColumns: string[] = ['name', 'resort', 'guest', 'date'];
  constructor( private jobService: JobService, private guideService: GuideService, private guestService: GuestService) { 
    this.user = JSON.parse(this.jwtUser.user);
  }

  ngOnInit(): void {  
    console.log(this.display);
    if(this.display === "jobs"){
      this.jobService.getJobs("?guideId=null").subscribe(
        (jobs: Job[]) => {
          this.jobs = jobs
        }
      );
    }
  }


}
