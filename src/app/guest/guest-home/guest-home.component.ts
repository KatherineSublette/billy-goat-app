import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css']
})
export class GuestHomeComponent implements OnInit {
  isHome = true;
  isOldTrip = false;
  isMessages = false;
  isProfile = false;
  homeText: string;
  homeDisplay: string;
  oldTripsHeader: string;
  oldTripsText: string;
  constructor() { }

  ngOnInit(): void {
    this.homeText = "Guides currently available";
    this.homeDisplay = "guides";
    this.oldTripsHeader = "Old Trips";
    this.oldTripsText = "No previous Trips to show";
  }

  toggleHome(): void{
    this.isHome = true;
    this.isOldTrip = false;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleOldTrip(): void{
    this.isHome = false;
    this.isOldTrip = true;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleMessages(): void{
    this.isHome = false;
    this.isOldTrip = false;
    this.isMessages = true;
    this.isProfile = false;
  }

  toggleProfile(): void{
    this.isHome = false;
    this.isOldTrip = false;
    this.isMessages = false;
    this.isProfile = true;
  }

}
