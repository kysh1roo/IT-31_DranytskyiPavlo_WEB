import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() name!: string;
  @Input() price!: number;
  @Input() description!: string;

  @Output() buy = new EventEmitter<string>();

  onBuy(): void {
    this.buy.emit(this.name);
  }
}