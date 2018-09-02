import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  submit(loginForm) { 
    const token = loginForm.value.authKey; 
    this.productService.token = token; 
    this.router.navigate(['products']); 

    // const p = new Product('a', 'b', 2, '1');

    // this.productService.createProduct(p).subscribe(data => {
    //   console.log(data)
    // }); 

    // this.productService.updateProduct(new Product('aba'), 31)
    // .subscribe(data => console.log(data)); 

    // this.productService.deleteProduct(29)
    // .subscribe(data => console.log(data)); 
  }

}
