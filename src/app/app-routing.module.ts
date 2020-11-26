import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './containers/products/products.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'new', component: ProductItemComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
