export interface Cart {
  carts: {
    id: string;
    products: {
      id: number;
      title: string;
      price: number;
      quantity: number;
      total: number;
      discountPercentage: number;
      discountedPrice: number;
    };
  };
}
