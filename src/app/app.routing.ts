import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ProductGuardService as ProductGuard } from './product-guard.service';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'}, 
    { path: 'login', component: LoginComponent }, 
    { path: 'products', component: ProductListComponent, canActivate: [ProductGuard] },
    { path: 'edit-product', component: EditProductComponent, canActivate: [ProductGuard] },
    { path: 'add-product', component: AddProductComponent, canActivate: [ProductGuard] }, 
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);