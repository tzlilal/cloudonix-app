import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ProductGuardService } from './product-guard.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    EditProductComponent,
    AddProductComponent,
    ConfirmationDialogComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [ProductService, ConfirmationDialogService, ProductGuardService],
  bootstrap: [AppComponent], 
  entryComponents: [ ConfirmationDialogComponent ]
})
export class AppModule { }
