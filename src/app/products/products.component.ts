import { Component, OnInit } from '@angular/core';
import { report } from 'process';
import { Product } from '../model/product.model';
import { RepoService } from '../model/repository.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = this.repository.products;
  constructor(private repository: RepoService) { }

  ngOnInit(): void {
  }
  


}
