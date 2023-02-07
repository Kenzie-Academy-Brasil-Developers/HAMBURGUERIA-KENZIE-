import { CartProduct } from "./CartProduct";
import { StyledCart, StyledList } from "./style";

export const Cart = ({ productCart, removeProductFromCart }) => {
  return (
    <div>
      <StyledCart>
        <h4>Carrinho de compras</h4>
      </StyledCart>
      <StyledList>
        <CartProduct
          productCart={productCart}
          removeProductFromCart={removeProductFromCart}
        />
      </StyledList>
    </div>
  );
};
