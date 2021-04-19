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
  private noGuide: "Unclaimed";
  private displayedColumns: string[] = ['name', 'resort', 'guide', 'date', 'cancel'];
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
        this.refreshTrips();
        console.log(this.trips);
      }
    );
  }

  onCancel(job: Job): void {
    this.jobService.deleteJob(job.id).subscribe(
      (job: Job) => {
        this.toastr.success('You have deleted this job');
        this.refreshTrips();
      }
    );
    (error) => {
      this.toastr.error('Error cancelling this job.');
    }
  }

  refreshTrips(): void {
    let filter = "?guestId=" + this.guest.id.toString() + "&completed=false";
    console.log(filter)
    this.jobService.getJobs(filter).subscribe(
      (trips: Job[]) => {
        this.trips = trips
      }
    );
  }

  getGuide(trip: Job): string{
    let guideName = (trip.guide?.firstName + ' ' + trip.guide?.lastName) || "No Guide";
    return guideName;
  }

}
