import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.css']
})
export class LineChart2Component implements OnInit {

  myChart: any;
  chartData = [0.3, 0.4, 0.3, 0.6, 0.2, 0.7];
  run = true;

  constructor(
  ) { }

  ngOnInit(): void {
    this.chart();
    setInterval(() => {
      if(this.run){
        this.myChart.destroy();
        this.chartData = [0.3, 0.4, 0.3, 0.6, 0.2, 0.7];
        this.chart();
        this.run = false;
      } else {
        this.myChart.destroy();
        this.chartData = [0.3, 0.4, 0.7, 0.3, 0.6, 0.2];
        this.chart();
        this.run = true;
      }
    }, 2000);
  }

  chart() {
    Chart.register(...registerables);
    this.myChart = new Chart("myChart2", {
      type: 'line',
      data: 
      {
        labels: ['12:06:29', '12:06:39', '12:06:49', '12:06:59', '12:07:09', '12:07:19'],
        datasets: [{
          label: 'Power ',
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
                max: '0.8',
                ticks: {
                  stepSize: 0.2,
                }
              }
            }
        }
    });
  }

}
