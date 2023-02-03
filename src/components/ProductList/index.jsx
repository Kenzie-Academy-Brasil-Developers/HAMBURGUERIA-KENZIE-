import { Product } from "./Product";
import { StyledProductList } from "./style";

export const ProductList = ({ searchProducts, addProductToCart }) => {
  return (
    <StyledProductList>
      <Product
        searchProducts={searchProducts}
        addProductToCart={addProductToCart}
      />
    </StyledProductList>
  );
};
