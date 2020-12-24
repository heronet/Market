import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductsComponent } from './products/products.component';

const ROUTES: Routes = [
    {path: "", component: HomeComponent, pathMatch: "full"},
    {path: "products", component: ProductsComponent},
    {path: "product/:id", component: ProductItemComponent},
]

@NgModule({
    declarations: [
    ],
    imports :[
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule {

}