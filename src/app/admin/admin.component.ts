import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
  products:any

  constructor( private adminservice : AdminService ,private activated:ActivatedRoute, private router : Router ) { }

  ngOnInit(): void {
  this.getProductsData() 

  }

  getProductsData() {
    this.adminservice.getProductsDetails().subscribe((data: any) => {
      this.products = data
      console.log(this.products)
  })}

  deleteProduct(id: number ,index:number ) {
    this.adminservice.deleteProduct('productsitems', id).subscribe(el => {
      console.log(el);
      this.products.splice(index, 1)
    })
  }
}
