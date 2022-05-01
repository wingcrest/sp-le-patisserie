import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  imgSrc: string;
  desc: string;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
  data: Product[] = [
    // FIRST ITEM
    {
      id: 0,
      imgSrc: "/assets/products/canele1.png",
      desc: "A canelé is a small French pastry flavored with rum and vanilla with a soft and tender custard center and a dark, thick caramelized crust. It takes the shape of a small, striated cylinder up to five centimeters in height with a depression at the top.",
      name: "Canele",
      price: 49.50,
      amount: 1
    },
    
    // SECOND ITEM
    {
      id: 1,
      imgSrc: "/assets/products/chuket1.png",
      desc: "This pastry is used to make choux (small puffs), as the name implies, but also profiteroles, croquembouches, éclairs, religieuses, French crullers, beignets, St. Honoré cake, Parisian gnocchi, dumplings and gougères.",
      name: "Chouquettes",
      price: 59.50,
      amount: 1
    },
    
    // THIRD ITEM
    {
      id: 2,
      imgSrc: "/assets/products/croissant2.jpg",
      desc: "A croissant is a buttery, flaky, viennoiserie pastry of Austrian origin, but mostly associated with France. Croissants are named for their historical crescent shape and, like other viennoiserie, are made of a layered yeast-leavened dough.",
      name: "Croissant",
      price: 75,
      amount: 1
    },
    
    // FOURTH ITEM
    {
      id: 3,
      imgSrc: "/assets/products/doughnut.jpg",
      desc: "These are French Doughnuts. Beignet is a type of fritter, or deep-fried pastry, typically made from pâte à choux, but may also be made from other types of dough, including yeast dough.",
      name: "Beignet",
      price: 35,
      amount: 1
    },
    
    // FIFTH ITEM
    {
      id: 4,
      imgSrc: "/assets/products/kougn1.png",
      desc: "Kouign-amann is a Breton cake, described in the New York Times as the fattiest pastry in all of Europe. It is a round multi-layered cake, originally made with bread dough (nowadays sometimes viennoiserie dough), containing layers of butter and sugar folded in, similar in fashion to puff pastry albeit with fewer layers.",
      name: "Kouign Amann",
      price: 90,
      amount: 1
    },
    
    // SIXTH ITEM
    {
      id: 5,
      imgSrc: "/assets/products/macaron1.png",
      desc: "A macaron or French macaroon is a sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring.",
      name: "Macaron",
      price: 55,
      amount: 1
    },
    
    // SEVENTH --------
    {
      id: 6,
      imgSrc: "/assets/products/madeleine1.png",
      desc: "Madeleines are very small sponge cakes with a distinctive shell-like shape acquired from being baked in pans with shell-shaped depressions. Aside from the traditional moulded pan, commonly found in stores specialising in kitchen equipment and even hardware stores, no special tools are required to make madeleines.",
      name: "Madeleine",
      price: 48,
      amount: 1
    },
    
    // 8th ITEM
    {
      id: 7,
      imgSrc: "/assets/products/pain1.png",
      desc: "Pain aux raisins , also called escargot or pain russe, is a spiral pastry often eaten for breakfast in France. Its names translate as raisin bread, snail and Russian bread respectively. It is a member of the pâtisserie viennoise family of baked foods.",
      name: "Pain Aux Raisins",
      price: 60,
      amount: 1
    },
    
    // 9th ITEM
    {
      id: 8,
      imgSrc: "/assets/products/palmiera1.png",
      desc: "A palmier is a type of pastry that is eaten for breakfast or dessert. They are also known as palm leaf cookies or elephant ear cookies, although elephant ears are more commonly associated with a type of fried dough dessert. Palmiers are made of puff pastry and baked",
      name: "Palmier",
      price: 60,
      amount: 1
    },
    
    // 10th ITEM
    {
      id: 9,
      imgSrc: "/assets/products/parisian1.png",
      desc: "With a velvety custard filling and pâte brisée base, Parisian flan is an essential recipe in French cuisine—and for good reason! It’s important to tent the crust during the last few minutes of baking so you get that beautifully browned top without burning the crust.",
      name: "Parisian Flan",
      price: 250,
      amount: 1
    }
  ];
  
  private cart = [];
  currProduct: Product;
  private cartItemCnt = new BehaviorSubject(0);
  
  constructor() { }

  getDeliveryFee(){ return 100; }
  
  getProducts() { return this.data; }
  
  getCart() { return this.cart; }
  
  getSelectedItem(product) {this.currProduct = product;}

  checkSelectedItem() {return this.currProduct}

  addProduct(product){
    let added = false;
    for(let p of this.cart) {
      if(p.id === product.id) {
        p.amount += product.amount;
        added = true;
        break;
      }
    }
    
    if(!added) {
      this.cart.push(product);
    }
    
    // this.cartItemCnt.next(this.cartItemCnt.value + 1);
  }
  
  increaseProduct(product) {
    for(let p of this.data) {
      if(p.id === product.id) {
        product.amount++;
        break;
      }
    }
  }
  
  decreaseProduct(product) {
    for(let p of this.data) {
      if(p.id === product.id) {
        product.amount--;
        break;
      }
    }
  } 
  removeProduct(product) {
    for(let [index, p] of this.cart.entries()) {
      if(p.id === product.id) {
        this.cart.splice(index, 1);
      }
    }
  }
  //getCartItemCnt() { return this.cartItemCnt; }
  
}