import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Currency } from '../services/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  public course: Currency;
  public ratio: string;
  constructor(private currencyService: CurrencyService) {
    this.ratio = 'toUSD'
  }

  ngOnInit(): void {
    this.getCourse()
  }

  getCourse(): void {
    this.currencyService
      .getCourses()
      .then(data => {
          this.course = data.filter(c => c.ccy === 'USD')[0]
      })
  }

  toggleRatio():void {
    this.ratio = this.ratio === 'toUSD' ? 'toUAH' : 'toUSD'
  }

}
