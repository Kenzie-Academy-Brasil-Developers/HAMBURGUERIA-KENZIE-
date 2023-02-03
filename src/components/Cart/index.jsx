import { CartProduct } from "./CartProduct";

export const Cart = ({ productCart, removeProductFromCart }) => {
  return (
    <CartProduct
      productCart={productCart}
      removeProductFromCart={removeProductFromCart}
    />
  );
};
