import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  get isLoggedIn() {
    return this.productService.isLoggedIn; 
  }

}
