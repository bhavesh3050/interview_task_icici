import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  baseUrl ="http://localhost:3000/productsitems"

  getProductById(id: number ) {
  return this.http.get(this.baseUrl + '/' + id)
}

addNewProducts(data: string) {
  return this.http.post(this.baseUrl, data)
}

getProductsDetails(){
  return this.http.get(this.baseUrl)
  }
  
  updateproduct(id: number, product:any) {
    return this.http.put(this.baseUrl + "/" + id, product)
  }

deleteProduct(endpoint: string, id: number) {
  let   baseurl = "http://localhost:3000/";
  return this.http.delete(baseurl + endpoint + "/" + id)
}

}
