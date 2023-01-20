import { CartProduct } from "../redux/slices/cartSlice";

export const calcTotalCount = (products: CartProduct[]) => {
  return products.reduce((sum, product) => sum + product.count, 0);
};
