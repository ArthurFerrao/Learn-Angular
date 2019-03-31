import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCartService.items
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: MenuItem){
    this.shoppingCartService.addItem(item);
  }

  clear(){
    this.shoppingCartService.clear()
  }

  total(): number {
    return this.shoppingCartService.total()
  }
  

}
