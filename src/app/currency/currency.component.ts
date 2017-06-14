import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Currency } from '../services/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  public toBase: boolean;
  public selected: string;
  public value: number;
  public result: number;
  
  constructor(private currencyService: CurrencyService) {
    this.toBase = false;
    this.selected = 'USD';
    this.result = 0;
  }

  ngOnInit(): void {
    this.currencyService.getCourses()
  }

  setCurrency(currency) {
    this.selected = currency
    this.getResult()
  }

  setValue(value) {
    this.value = value
    this.getResult()
  }

  toggleRatio() {
    this.toBase = !this.toBase
    this.getResult()
  }

  getResult() {
    this.result = this.toBase ?
    this.currencyService.toBase(this.selected, this.value) :
    this.currencyService.fromBase(this.selected, this.value)
  }

}
