import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';
import { saveAs } from 'file-saver';

import zoomPlugin from 'chartjs-plugin-zoom';
import { THEME , THEME_RGBA, TITLE } from 'brand/const';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit {
  title = TITLE;

  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('doughnutChartCanvas') doughnutChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineChartCanvas') lineChartCanvas!: ElementRef<HTMLCanvasElement>;
  barChart!: Chart;
  doughnutChart!: Chart;
  lineChart!: Chart;

  constructor() {
    Chart.register(...registerables , zoomPlugin)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initBarChart();
    this.initDoughnutChart();
    this.initLineChart();
  }

  public saveImg(chart: Chart): void {
    let imgBase64 = chart?.toBase64Image();
    if (imgBase64) {
      fetch(imgBase64)
        .then((res) => res.blob())
        .then((res) => {
          saveAs(res, "image.png")
        })
    }
  }

  public resetZoom(chart: Chart): void {
    chart?.resetZoom();
  }

  private initBarChart() {
    const data: ChartData = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: [
          THEME_RGBA.primaryLighter,
          THEME_RGBA.primaryLighter,
          THEME_RGBA.primaryLighter,
          THEME_RGBA.primaryLighter,
          THEME_RGBA.primaryLighter,
          THEME_RGBA.primaryLighter,
        ],
        borderColor: [
          THEME_RGBA.primaryLight,
          THEME_RGBA.primaryLight,
          THEME_RGBA.primaryLight,
          THEME_RGBA.primaryLight,
          THEME_RGBA.primaryLight,
          THEME_RGBA.primaryLight,
        ]
      }]
    };
    const options: ChartOptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
    const type : ChartType = 'bar';

    this.barChart = new Chart(this.barChartCanvas.nativeElement, { type, data, options });
  }

  private initDoughnutChart(){
    const data: ChartData = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          THEME.primary,
          THEME.primaryDark,
          THEME.primaryLight,
        ],
        hoverOffset: 4
      }]
    };
    const options: ChartOptions = {};
    const type : ChartType = 'doughnut';

    this.doughnutChart = new Chart(this.doughnutChartCanvas.nativeElement, { type, data, options });
  }

  private initLineChart(){
    const data: ChartData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo' , 'Junio', 'Julio'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: THEME.primaryLight,
        tension: 0.1
      }]
    }
    const options: ChartOptions = {
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true
            },
            mode: 'xy',
          }
        }
      }
    };
    const type : ChartType = 'line';

    this.lineChart = new Chart(this.lineChartCanvas.nativeElement, { type, data, options });
  }

}
