import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
    providedIn: "root"
})

export class RepoService {
    selectedProduct: Product;

    ///WARNING: These informations will be loaded from a database in the production build.
    products: Product[] = [
        new Product("YZF-R15", 1, 215000, "Sirat", "01800043768", "fun", " Really Nice Bike. Very comfortable for your arse. Once you buy it, it's all yours. We won't take it back. That's a promise. But we can't guarantee that we would keep it", "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20180806024634_Yamaha-R15.jpg", "randomunworthy@gmail.com"),
        new Product("Grand Theft Auto IV", 2, 215000, "Sirat", "01800043768", "fun", "GTA IV is the best GTA ever made. In this game, you steal cars in NYC.", "https://upload.wikimedia.org/wikipedia/en/b/b7/Grand_Theft_Auto_IV_cover.jpg", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 3, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://s29588.pcdn.co/wp-content/uploads/sites/2/2020/02/Craziest-Find-17th-Century-Sunken-Ship-22.jpg.optimal.jpg", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 4, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png","randomunworthy@gmail.com"),
        new Product("Sank Ship", 5, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 6, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 7, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 8, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 9, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 10, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 11, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 12, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com"),
        new Product("Sank Ship", 13, 215000, "Sirat", "01800043768", "fun","This ship sank during a zombie apocalyps. Although all the people onboard survived. Which is kind of unfortunate. But good for us because that event made The Ship more expensive", "https://safety4sea.com/wp-content/uploads/2019/11/reef-e1573121224354.png", "randomunworthy@gmail.com")
    ]

    findById(id: number) {
        this.selectedProduct = this.products.find(prod => prod.Id === id);
        return this.selectedProduct;
    }
}