import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://frontend.test.cloudonix.io/items';

  set token(token: string) { 
    localStorage.setItem('token', token); 
  }

  get token() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : ''; 
  }

  get headers() { 
    return new HttpHeaders({'Authorization': `Bearer  ${this.token}`});
  }

  getProducts() {   
    return this.http.get<Product[]>(this.baseUrl, {headers: this.headers});  
  }

  createProduct(product: Product) { 
    return this.http.post(this.baseUrl, product, {headers: this.headers});
  }

  updateProduct(product: Product, id: number) {
    const url = `${this.baseUrl}/${id}`; 
    return this.http.patch(url, product, {headers: this.headers}); 
  }

  deleteProduct(id: number) { 
    const url = `${this.baseUrl}/${id}`; 
    return this.http.delete(url, {headers: this.headers}); 
  }

  getProductById(id: number) { 
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url, {headers: this.headers}); 
  }

  get columns() {
    return ['Id', 'Name', 'Cost', 'Sku', 'Action']; 
  }

  logout() { 
    localStorage.clear();
  }

  get isLoggedIn() { 
    return localStorage.getItem('token') !== null;
  }
}
