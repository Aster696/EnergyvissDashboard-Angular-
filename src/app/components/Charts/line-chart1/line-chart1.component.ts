import { Component, OnInit } from '@angular/core';
import { Chart, registerables, Ticks } from 'chart.js';

@Component({
  selector: 'app-line-chart1',
  templateUrl: './line-chart1.component.html',
  styleUrls: ['./line-chart1.component.css']
})
export class LineChart1Component implements OnInit {

  myChart: any;
  chartData = [0.05, 0.10, 0.05, 0.15, 0.10, 0.15];
  run = true;

  constructor(
  ) { }

  ngOnInit(): void {
    this.chart();
    setInterval(() => {
      if(this.run){
        this.chartData = [0.05, 0.10, 0.05, 0.15, 0.10, 0.15];
        this.myChart.destroy();
        this.chart();
        this.run = false;
      } else {
        this.chartData = [ 0.15, 0.10, 0.15, 0.05, 0.10, 0.05];
        this.myChart.destroy();
        this.chart();
        this.run = true;
      }
    }, 2000);
  }

  chart() {
    Chart.register(...registerables);
    this.myChart = new Chart("myChart", {
      type: 'line',
      data: 
      {
        labels: ['12:06:29', '12:06:39', '12:06:49', '12:06:59', '12:07:09', '12:07:19'],
        datasets: [{
          label: 'Power (kW)',
          data: this.chartData,
          borderWidth: 1
        },
        // 
        ]
      },
        options: {
          plugins: {
            legend: {
              display: false
            }
          },
            scales: {
              y: {
                beginAtZero: true,
                max: '0.20',
                ticks: {
                  stepSize: 0.05,
                }
              }
            }
        }
    });
  }
    
}
