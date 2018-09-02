import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private confirmationDialogService: ConfirmationDialogService) { }
  products: Product[] = [];
  columns: string[]; 
  
  ngOnInit() {
    this.columns = this.productService.columns; 

    this.productService.getProducts()
    .subscribe(products  => {
      for (let product of products) {
        if (product) {
          this.products.push(
            new Product(product.name, product.description, product.cost,  product.sku, product.id)
          );
        } 
      }  
    }); 
  }

  onShowDescription(product: Product) { 
    this.confirmationDialogService.confirm('Product description', product.description, false)
    .then(confirmed => {})
    .catch(() => {}); 
  }

  onDeleteProduct(product: Product) { 
    this.confirmationDialogService.confirm('Confirm delete action', 'Do you really want to delete this product?')
    .then(confirmed => {
      if (confirmed) { 
        this.productService.deleteProduct(product.id)
        .subscribe(data => {
          this.products = this.products.filter(p => p !== product); 
        }); 
      }
    })
    .catch(() => {});
  }

  onEditProduct(product: Product) { 
    localStorage.removeItem('editProductId');
    localStorage.setItem('editProductId', product.id.toString());
    this.router.navigate(['edit-product']); 
  }

}
