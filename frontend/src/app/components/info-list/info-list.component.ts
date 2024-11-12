import { CurrencyPipe } from '@angular/common';
import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-info-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './info-list.component.html',
  styleUrl: './info-list.component.scss',
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class InfoListComponent {
  entradas:number = 17400;
  saidas:number = 1259;
  total:number = this.entradas - this.saidas;
}
