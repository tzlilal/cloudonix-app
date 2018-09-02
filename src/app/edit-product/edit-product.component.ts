import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from "rxjs/operators";

import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }
  product: Product; 
  editForm: FormGroup; 

  ngOnInit() {
    const productId = localStorage.getItem('editProductId'); 
    if(!productId) { 

    }
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      cost: ['', Validators.required], 
      id: [], 
      sku: []
    });
    this.productService.getProductById(+productId)
    .subscribe(product => {
      this.editForm.setValue(product); 
    });
  }

  onSubmit() { 
    const formData: Product = this.editForm.value;
    const productId = formData.id; 
    delete formData.id;
    delete formData.sku;

    this.productService.updateProduct(formData, productId)
    .pipe(first())
    .subscribe(
      product => {  
        this.router.navigate(['products'])
     }, 
     error => {
       console.log(error); 
     });  
  }

  get cost() {
    return this.editForm.get('cost'); 
  }

}
