import { Button } from "../../Button";
import { StyledLi } from "./style";

export const CartProduct = ({ productCart, removeProductFromCart }) => {
  return (
    <>
      {productCart.map((product) => {
        return (
          <StyledLi key={product.id}>
            <img src={product.img} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
            </div>
            <Button action={() => removeProductFromCart(product.id)}>
              Remover
            </Button>
          </StyledLi>
        );
      })}
    </>
  );
};
