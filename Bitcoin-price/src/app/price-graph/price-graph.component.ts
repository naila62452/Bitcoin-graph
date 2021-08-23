import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
}
