import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
