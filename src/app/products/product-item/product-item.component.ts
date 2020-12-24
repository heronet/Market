import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { RepoService } from 'src/app/model/repository.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  product: Product;
  productId: number;
  constructor(private repo: RepoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = +params["id"];
      this.product = this.repo.findById(this.productId);
    });
  }

}
