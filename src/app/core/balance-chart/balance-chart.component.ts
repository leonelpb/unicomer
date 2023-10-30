import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexYAxis,
} from 'ng-apexcharts';
import { WeekExpensesService } from 'src/app/service/week-expenses.service';
import { WeekIncomesService } from 'src/app/service/week-incomes.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-balance-chart',
  templateUrl: './balance-chart.component.html',
  styleUrls: ['./balance-chart.component.scss'],
})
export class BalanceChartComponent {
  eAmounts: number[] = [];
  iAmounts: number[] = [];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};

  constructor(
    private weekIncomesService: WeekIncomesService,
    private weekExpensesService: WeekExpensesService
  ) {}

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: 'Gasto',
          data: [], //this is where it should be store the data, but is not getting rendered
        },
        {
          name: 'Ingreso',
          data: [], //this is where it should be store the data, but is not getting rendered
        },
      ],
      chart: {
        width:'100%',
        height:'100%',
        type: 'bar',
        toolbar:{
          show:false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '35%',
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Dom',
          'Lun',
          'Mar',
          'Mier',
          'Jue',
          'Vier',
          'Sab',
        ],
      },
      yaxis: {
        title: {
          text: '$',
        },
      },
      fill: {
        opacity: 1,
        colors:['#343b63','#e66567']
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val;
          },

        },
      },
      legend:{
        show: false,
      }
    };
    this.weekExpensesService.getAllWExpenses().subscribe((res) => {
      this.eAmounts = res.map((item: { amount: number }) => item.amount);
      this.updateChartOptions();
    });
    this.weekIncomesService.getAllWIncomes().subscribe((res) => {
      this.iAmounts = res.map((item: { amount: number }) => item.amount);
      this.updateChartOptions();
      console.log(this.iAmounts);
    });
    setTimeout(() => (window as any).dispatchEvent(new Event('resize')), 1);
  }

  private updateChartOptions() {
    // Check if both eAmounts and iAmounts have data
    if (this.eAmounts.length > 0 && this.iAmounts.length > 0) {
      // Update the chartOptions when both arrays are populated
      this.chartOptions.series![0].data = this.eAmounts;
      this.chartOptions.series![1].data = this.iAmounts;
    }
  }
}
