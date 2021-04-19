import { Component, Input, OnInit } from '@angular/core';
import { Guest } from 'src/app/models/guest.model';
import { Guide } from 'src/app/models/guide.model';
import { Job } from 'src/app/models/job.model';
import { User } from 'src/app/models/user.model';
import { GuestService } from 'src/app/services/guest.service';
import { GuideService } from 'src/app/services/guide.service';
import { JobService } from 'src/app/services/job.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-open-job-page',
  templateUrl: './open-job-page.component.html',
  styleUrls: ['./open-job-page.component.css']
})
export class OpenJobPageComponent implements OnInit {
  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private user: User;
  private guide: Guide;
  private jobs: Job[] = [];
  private displayedColumns: string[] = ['name', 'resort', 'guest', 'date', 'accept'];
  constructor( private jobService: JobService, private guideService: GuideService, private toastr: ToastrService) { 
    this.user = JSON.parse(this.jwtUser.user);
    this.guideService.getGuideByUserId(this.user.id).subscribe(
      (guide: Guide) => {
        this.guide = guide[0];
      }
    );
  }

  ngOnInit(): void {  
      this.refreshJobs();
  }

  onAccept(job: Job): void {
    job.guideId = this.guide.id;
    job.guest = null;
    job.guide = null;
    job.resort = null;
    this.jobService.updateJob(job).subscribe(
      (job: Job) => {
        this.toastr.success('You have accepted this job');
        this.refreshJobs();
      }
    );
    (error) => {
      this.toastr.error('Error updating guest.');
    }
  }

  refreshJobs(): void {
    this.jobService.getJobs("?guideId=null").subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs
      }
    );
  }


}
