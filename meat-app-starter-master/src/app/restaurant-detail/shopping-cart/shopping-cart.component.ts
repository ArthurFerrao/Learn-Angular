import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items
  }

  clear(){
    this.shoppingCartService.clear
  }
  total(): number {
    return this.shoppingCartService.total()
  }
  

}
