import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Guide } from 'src/app/models/guide.model';
import { Job } from 'src/app/models/job.model';
import { User } from 'src/app/models/user.model';
import { GuideService } from 'src/app/services/guide.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-my-jobs-page',
  templateUrl: './my-jobs-page.component.html',
  styleUrls: ['./my-jobs-page.component.css']
})
export class MyJobsPageComponent implements OnInit {

  private jwtUser: User = JSON.parse(sessionStorage.getItem("user"));
  private user: User;
  private guide: Guide;
  private jobs: Job[] = [];
  private displayedColumns: string[] = ['name', 'resort', 'guest', 'date', 'complete', 'cancel'];
  constructor( private jobService: JobService, private guideService: GuideService, private toastr: ToastrService) { 
    this.user = JSON.parse(this.jwtUser.user);
    this.guideService.getGuideByUserId(this.user.id).subscribe(
      (guide: Guide) => {
        this.guide = guide[0];
      }
    );
  }

  ngOnInit(): void {  
    this.user = JSON.parse(this.jwtUser.user);
    this.guideService.getGuideByUserId(this.user.id).subscribe(
      (guide: Guide) => {
        this.guide = guide[0];
        this.refreshJobs();
      }
    );
  }

  onComplete(job: Job): void {
    job.completed = true;
    job.guest = null;
    job.guide = null;
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
    job.guideId = null;
    job.guest = null;
    job.guide = null;
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
    let filter = "?guideId=" + this.guide.id.toString() + "&completed=false";
    this.jobService.getJobs(filter).subscribe(
      (jobs: Job[]) => {
        this.jobs = jobs
      }
    );
  }

}
