import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from './services/product-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  products: any
  currentRate: any
 
  constructor(private productservice: ProductDataService, private router: Router) { }

  ngOnInit(): void {
    this.getProductsData()
  }

  getProductsData() {
    this.productservice.getProductsDetails().subscribe((data: any) => {
      console.log(data)
      this.products = data
    })
  }

  lowtoHighSort(){
  this.products.sort((a:any, b:any) => (a.price > b.price ? 1 : -1))
  }
  hightoLowSort(){
    this.products.sort((a:any, b:any) => (b.price > a.price ? 1 : -1))
  }
  sortByCategory(){
    this.products.sort((a:any, b:any) => (b.category > a.category ? 1 : -1))
  }
  sortByRating(){
    this.products.sort((a:any, b:any) => (b.rating.rate > a.rating.rate ? 1 : -1))
  }
}
