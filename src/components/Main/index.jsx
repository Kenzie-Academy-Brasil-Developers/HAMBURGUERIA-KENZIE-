import { Cart } from "../Cart";
import { EmptyCart } from "../EmptyCart";
import { ProductList } from "../ProductList";
import { Button } from "../Button";
import { TotalValue } from "../TotalValue";
import { StyledMain, StyledSearched } from "./style";
import { StyledContainer } from "../../styles/container";
import { StyledEmptyListTitle } from "../EmptyCart/style";

export const Main = ({
  search,
  searchProducts,
  addProductToCart,
  productCart,
  removeProductFromCart,
  totalValue,
  setSearch,
  removeAllProducts,
}) => {
  return (
    <StyledContainer>
      <StyledMain>
        <section>
          {search && (
            <StyledSearched>
              <h1>
                Resultados para: <span>{search}</span>
              </h1>
              <Button action={() => setSearch("")}>Limpar busca</Button>
            </StyledSearched>
          )}
          <ProductList
            searchProducts={searchProducts}
            addProductToCart={addProductToCart}
          />
        </section>

        <aside>
          <>
            {productCart.length == 0 ? (
              <EmptyCart />
            ) : (
              <>
                <Cart
                  productCart={productCart}
                  removeProductFromCart={removeProductFromCart}
                />
                <TotalValue
                  totalValue={totalValue}
                  removeAllProducts={removeAllProducts}
                />
              </>
            )}
          </>
        </aside>
      </StyledMain>
    </StyledContainer>
  );
};
