import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-page',
  templateUrl: './previous-page.component.html',
  styleUrls: ['./previous-page.component.css']
})
export class PreviousPageComponent implements OnInit {
  @Input() header: string;
  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
