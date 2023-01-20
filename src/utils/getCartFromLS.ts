import { calcTotalPrice } from "./calcTotalPrice";
import { calcTotalCount } from "./calcTotalCount";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const json = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(json);
  const totalCount = calcTotalCount(json);

  return {
    products: json,
    totalPrice: totalPrice,
    totalCount: totalCount,
  };
};
