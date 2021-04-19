import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.css']
})
export class GuestHomeComponent implements OnInit {
  isMyTrips = true;
  isCompletedTrips = false;
  isMessages = false;
  isProfile = false;
  homeText: string;
  homeDisplay: string;
  oldTripsHeader: string;
  oldTripsText: string;
  constructor() { }

  ngOnInit(): void {
  }

  toggleHome(): void{
    this.isMyTrips = true;
    this.isCompletedTrips = false;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleOldTrip(): void{
    this.isMyTrips = false;
    this.isCompletedTrips = true;
    this.isMessages = false;
    this.isProfile = false;
  }

  toggleMessages(): void{
    this.isMyTrips = false;
    this.isCompletedTrips = false;
    this.isMessages = true;
    this.isProfile = false;
  }

  toggleProfile(): void{
    this.isMyTrips = false;
    this.isCompletedTrips = false;
    this.isMessages = false;
    this.isProfile = true;
  }

}
