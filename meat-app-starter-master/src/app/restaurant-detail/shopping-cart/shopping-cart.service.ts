import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] = []
    
    clear(){
        this.items = []
    }

    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem)=>item.id === mItem.menuItem.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(item))
        }
    }
    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }
    
    total(): number{
        return this.items
            .map((item)=>item.value())
            .reduce((prev, val) => prev + val , 0)  
    }   

    increaseQty(item: CartItem){
        item.quantity += 1
    }

    decreaseQty(item: CartItem){
        item.quantity -= 1
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }
}