import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  isHome = true;
  isOldTrip = false;
  isMessages = false;
  isProfile = false;
  homeText: string;
  oldTripsHeader: string;
  oldTripsText: string;
  constructor() { }

  ngOnInit(): void {
    this.homeText = "This will eventually be a feed that displays all guides available during the guest's upcoming trip";
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
