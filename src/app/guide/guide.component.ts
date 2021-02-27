import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  isHome = true;
  isOldJob = false;
  isMessages = false;
  isProfile = false;
  homeText: string;
  oldJobsHeader: string;
  oldJobsText: string;
  constructor() { }

  ngOnInit(): void {
    this.homeText = "This will eventually be a feed that displays all guests looking to hire guides for upcoming trips";
    this.oldJobsHeader = "Old Jobs";
    this.oldJobsText = "No previous jobs to show";
  }

  toggleHome(): void{
    this.isHome = true;
    this.isOldJob = false;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleOldJob(): void{
    this.isHome = false;
    this.isOldJob = true;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleMessages(): void{
    this.isHome = false;
    this.isOldJob = false;
    this.isMessages = true;
    this.isProfile = false;
  }

  toggleProfile(): void{
    this.isHome = false;
    this.isOldJob = false;
    this.isMessages = false;
    this.isProfile = true;
  }
}
