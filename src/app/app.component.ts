import { Component } from '@angular/core';
import { MenuItem } from './interface/menu-item';
import { mapToCanActivate } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChripusPizzaLab';

  menuItem: MenuItem[] = [
    {name: 'Chicken Fingers', catagory: 'Dinner', price: 11.99, vegetarian: false, soldOut: false},
    {name: 'Pizza', catagory: 'Dinner', price: 11.99, vegetarian: true, soldOut: false},
    {name: 'Pepperoni Pizza', catagory: 'Dinner', price: 12.99, vegetarian: false, soldOut: false},
    {name: 'Bread Sticks', catagory: 'Sides', price: 4.99, vegetarian: true, soldOut: true},
    {name: 'Wings', catagory: 'Sides', price: 8.99, vegetarian: false, soldOut: false},
    {name: 'Cinnamon Roll', catagory: 'Dessert', price: 8.99, vegetarian: true, soldOut: false},
  ]

  totalPrice: number = 0;

  addToOrder(menuItem: MenuItem): void {
    this.totalPrice += menuItem.price;
  }

}
