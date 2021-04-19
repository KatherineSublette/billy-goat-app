import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Guest } from 'src/app/models/guest.model';
import { Job } from 'src/app/models/job.model';
import { User } from 'src/app/models/user.model';
import { GuestService } from 'src/app/services/guest.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-my-trips-page',
  templateUrl: './my-trips-page.component.html',
  styleUrls: ['./my-trips-page.component.css']
})
export class MyTripsPageComponent implements OnInit {

  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private user: User;
  private guest: Guest;
  private trips: Job[] = [];
  private displayedColumns: string[] = ['name', 'resort', 'guest', 'date', 'complete', 'cancel'];
  constructor( private jobService: JobService, private guestService: GuestService, private toastr: ToastrService) { 
    this.user = JSON.parse(this.jwtUser.user);
    this.guestService.getGuestByUserId(this.user.id).subscribe(
      (guest: Guest) => {
        this.guest = guest[0];
      }
    );
  }

  ngOnInit(): void {  
    this.user = JSON.parse(this.jwtUser.user);
    this.guestService.getGuestByUserId(this.user.id).subscribe(
      (guest: Guest) => {
        this.guest = guest[0];
        this.refreshJobs();
      }
    );
  }

  onComplete(job: Job): void {
    job.completed = true;
    job.guest = null;
    job.guest = null;
    job.resort = null;
    this.jobService.updateJob(job).subscribe(
      (job: Job) => {
        this.toastr.success('You have completed this job');
        this.refreshJobs();
      }
    );
    (error) => {
      this.toastr.error('Error completing this job.');
    }
  }

  onCancel(job: Job): void {
    job.guestId = null;
    job.guest = null;
    job.guest = null;
    job.resort = null;
    this.jobService.updateJob(job).subscribe(
      (job: Job) => {
        this.toastr.success('You have cancelled this job');
        this.refreshJobs();
      }
    );
    (error) => {
      this.toastr.error('Error cancelling this job.');
    }
  }
  refreshJobs(): void {
    let filter = "?guestId=" + this.guest.id.toString() + "&completed=false";
    this.jobService.getJobs(filter).subscribe(
      (trips: Job[]) => {
        this.trips = trips
      }
    );
  }

}
