import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.mobileResponsive();
    setInterval(() => {
      this.getGauge1();
      this.getGauge2();
      this.getGauge3();
      this.getGauge4();
      this.getGauge5();
    }, 2000)
  }

  gauge1: Number = 0;
  gauge2: Number = 0;
  gauge3: Number = 0;
  gauge4: Number = 0;
  gauge5: Number = 0;

  getGauge1() {
    return this.gauge1 = Math.round(Math.random() * 180)
  }

  getGauge2() {
    return this.gauge2 = Math.round(Math.random() * 180)
  }

  getGauge3() {
    return this.gauge3 = Math.round(Math.random() * 180)
  }

  getGauge4() {
    return this.gauge4 = Math.round(Math.random() * 180)
  }

  getGauge5() {
    return this.gauge5 = Math.round(Math.random() * 180)
  }

  cols: number = 5
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
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.cols = 2;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.cols = 3;
      } else if (result.breakpoints[Breakpoints.Large]) {
        this.cols = 5;
      } else {
        this.cols = 5;
      }
    });
  }

}
