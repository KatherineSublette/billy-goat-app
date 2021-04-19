import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide-home.component.html',
  styleUrls: ['./guide-home.component.css']
})
export class GuideHomeComponent implements OnInit {
  isHome = true;
  isMyJobs = false;
  isOldJob = false;
  isMessages = false;
  isProfile = false;
  oldJobsHeader: string;
  oldJobsText: string;
  constructor() { }

  ngOnInit(): void {
    this.oldJobsHeader = "Old Jobs";
    this.oldJobsText = "No previous jobs to show";
  }

  toggleHome(): void{
    this.isHome = true;
    this.isMyJobs = false;
    this.isOldJob = false;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleMyJobs(): void{
    this.isHome = false;
    this.isMyJobs = true;
    this.isOldJob = false;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleOldJob(): void{
    this.isHome = false;
    this.isMyJobs = false;
    this.isOldJob = true;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleMessages(): void{
    this.isHome = false;
    this.isMyJobs = false;
    this.isOldJob = false;
    this.isMessages = true;
    this.isProfile = false;
  }

  toggleProfile(): void{
    this.isHome = false;
    this.isMyJobs = false;
    this.isOldJob = false;
    this.isMessages = false;
    this.isProfile = true;
  }
}
