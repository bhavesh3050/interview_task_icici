import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor( private http:HttpClient) { }
  //  baseUrl ="assets/Products.json"

  baseUrl = "http://localhost:3000/productsitems";

   getProductsDetails(){
   return this.http.get(this.baseUrl)
   }

//   deleteProduct(endpoint: string, id: number) {
//     let   baseurl = "http://localhost:3000/";
//     return this.http.delete(baseurl + endpoint + "/" + id)
// }



}