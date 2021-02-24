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
  constructor() { }

  ngOnInit(): void {
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
