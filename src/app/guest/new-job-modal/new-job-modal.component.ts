import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyTripsPageComponent } from '../my-trips-page/my-trips-page.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Guest } from 'src/app/models/guest.model';
import { GuestService } from 'src/app/services/guest.service';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-job-modal',
  templateUrl: './new-job-modal.component.html',
  styleUrls: ['./new-job-modal.component.css']
})
export class NewJobModalComponent implements OnInit {
  form: FormGroup;
  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private user: User;
  private guest: Guest;

  constructor(public dialogRef: MatDialogRef<MyTripsPageComponent>,
    private guestService: GuestService,
    private jobService: JobService,
    private toastr: ToastrService) {
    this.form = new FormGroup({
      Name: new FormControl('', [ Validators.required]),
      Resort: new FormControl('', [ Validators.required ]),
      Date: new FormControl('', [ Validators.required])
    });

    this.user = JSON.parse(this.jwtUser.user);
    this.guestService.getGuestByUserId(this.user.id).subscribe(
      (guest: Guest) => {
        this.guest = guest[0];
      }
    );
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void{
    let trip = new Job;
    trip.name = this.form.get("Name").value;
    trip.resortId = this.form.get("Resort").value;
    trip.date = this.form.get("Date").value;
    trip.guestId = this.guest.id;
    this.jobService.addJob(trip).subscribe(
      (job: Job) => {
        this.toastr.success('You have added this trip');
        this.dialogRef.close();
      }
    );
    (error) => {
      this.toastr.error('Error adding this job.');
    }
    
  }
}
