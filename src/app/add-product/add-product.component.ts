import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private productService: ProductService) { }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      cost: ['', Validators.required], 
      sku: ['', Validators.required]
    });
  }

  onSubmit() { 
    this.productService.createProduct(this.addForm.value)
    .subscribe(product => {
      this.router.navigate(['products']);
    }); 
  }

  get cost() {
    return this.addForm.get('cost'); 
  }

}
