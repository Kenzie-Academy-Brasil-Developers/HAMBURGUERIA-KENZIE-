import { Cart } from "../Cart";
import { EmptyCart } from "../EmptyCart";
import { ProductList } from "../ProductList";
import { Button } from "../Button";
import { TotalValue } from "../TotalValue";
import { StyledMain } from "./style";
import { StyledContainer } from "../../styles/container";

export const Main = ({
  search,
  searchProducts,
  addProductToCart,
  productCart,
  removeProductFromCart,
  totalValue,
  setSearch,
}) => {
  return (
    <StyledContainer>
      <StyledMain>
        <section>
          {search && (
            <div>
              <h1>Resultados para: {search}</h1>
              <Button action={() => setSearch("")}>Limpar busca</Button>
            </div>
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
                <TotalValue totalValue={totalValue} />
              </>
            )}
          </>
        </aside>
      </StyledMain>
    </StyledContainer>
  );
};
