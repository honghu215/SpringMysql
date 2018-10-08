import { Component, OnInit } from '@angular/core';

import { Stock } from '../stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  stock: Stock = new Stock();
  submitted = false;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    console.log('Creating new stock...');
  }

  newStock(): void {
    this.submitted = false;
    this.stock = new Stock();
  }

  save() {
    this.stockService.createStock(this.stock)
      .subscribe(data => console.log(data), error => console.log(error));
    this.stock = new Stock();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
