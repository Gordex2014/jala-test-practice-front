export class CartProduct {
  name: string;
  uid: string;
  quantity: number;
  imageUrl: string;
  price: number;

  constructor(
    productName: string,
    productUid: string,
    productQuantity: number,
    imageUrl: string,
    productPrice: number
  ) {
    this.name = productName;
    this.uid = productUid;
    this.quantity = productQuantity;
    this.imageUrl = imageUrl;
    this.price = productPrice;
  }
}

export interface Product {
  uid: string;
  description: string;
  imageUrl: string;
  ratesAverage: number;
  name: string;
  price: number;
  typeOfFood: string;
}
