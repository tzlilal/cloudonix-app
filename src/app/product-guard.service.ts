import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { ProductService } from './product.service'

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate {

  constructor(private productService: ProductService, private router: Router) { }

  canActivate(): boolean {
    if (!this.productService.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
