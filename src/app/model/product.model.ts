export class Product {
    /**
     *
     */
    constructor(
        public Name: string,
        public Id: number,
        public Price: number,
        public Seller: string,
        public Phone: string,
        public Category: string,
        public Description: string,
        public imageSource: string,
        public Email: string
    ) { }
}