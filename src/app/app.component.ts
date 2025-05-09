import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EnergyvissDashboard';

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.mobileResponsive();
  }


  cols: number = 5
  rowHeight: string | number = '450px'
  mobileResponsive() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.cols = 1;
        this.rowHeight = '240px'
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.cols = 2;
        this.rowHeight = '300px'
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.cols = 2;
        this.rowHeight = '400px'
      } else if (result.breakpoints[Breakpoints.Large]) {
        this.cols = 2;
        this.rowHeight = '450px'
      } else {
        this.cols = 2;
        this.rowHeight = '450px'
      }
    });
  }
}
