import { Button } from "../../Button";
import { StyledProduct } from "./style";

export const Product = ({ searchProducts, addProductToCart }) => {
  return (
    <>
      {searchProducts.map((product) => (
        <StyledProduct key={product.id}>
          <div>
            <img src={product.img} alt={product.name} />
          </div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <span>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <Button action={() => addProductToCart(product)}>Adicionar</Button>
        </StyledProduct>
      ))}
    </>
  );
};
