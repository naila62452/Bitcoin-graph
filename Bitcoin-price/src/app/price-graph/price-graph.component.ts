import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-price-graph',
  templateUrl: './price-graph.component.html',
  styleUrls: ['./price-graph.component.scss']
})
export class PriceGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  lineChartData: ChartDataSets[] = [{ data: [88, 78, 20, 50], label: 'Bitcoin price in $' }];

  lineChartLabels: Label[] = ["2019-08-10", "2019-08-15", "2019-09-10", "2019-09-10"];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(173,230,230)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';
}
