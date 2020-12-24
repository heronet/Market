import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidenavListComponent } from './layout/sidenav-list/sidenav-list.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './layout/home/home.component';
import { AppRouterModule } from './router.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProductItemComponent } from './products/product-item/product-item.component';
import { DialogContactComponent } from './layout/dialog-contact/dialog-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    ProductsComponent,
    HomeComponent,
    ProductItemComponent,
    DialogContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouterModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
