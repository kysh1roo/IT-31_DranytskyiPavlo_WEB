import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  message = '';

  products = [
    {
      name: 'Ноутбук ASUS',
      price: 25000,
      description: 'Ноутбук для навчання та роботи.'
    },
    {
      name: 'Смартфон Samsung',
      price: 18000,
      description: 'Сучасний смартфон з якісною камерою.'
    },
    {
      name: 'Навушники Sony',
      price: 4500,
      description: 'Бездротові навушники з чистим звуком.'
    }
  ];

  onProductBuy(productName: string): void {
    this.message = `Товар "${productName}" додано до кошика`;
  }
}