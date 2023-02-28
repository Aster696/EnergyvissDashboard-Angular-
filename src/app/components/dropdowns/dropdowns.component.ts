import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {

  Meters = [
    "Meter 1",
    "Meter 2",
    "Meter 3",
    "Meter 4",
    "Meter 5",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
