import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-price-graph',
  templateUrl: './price-graph.component.html',
  styleUrls: ['./price-graph.component.scss'],
})
export class PriceGraphComponent implements OnInit {
  constructor(private service: BitcoinService) {}

  ngOnInit(): void {}
  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  getBitcoinData() {
    let startDate = this.range.get('start')?.value.format('YYYY-MM-DD');
    let endDate = this.range.get('end')?.value.format('YYYY-MM-DD');
    this.service.getBitcoinData(startDate, endDate).subscribe(
      (res) => {
        if (res.bpi) {
          this.lineChartLabels = Object.keys(res.bpi);
          this.lineChartData[0].data = Object.keys(res.bpi).map(
            (k) => res.bpi[k]
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  lineChartData: ChartDataSets[] = [{ data: [], label: 'Bitcoin price in $' }];

  lineChartLabels: Label[] = [];

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
