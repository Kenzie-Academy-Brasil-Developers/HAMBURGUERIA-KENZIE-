import { StyledEmptyList, StyledEmptyListTitle } from "./style";

export const EmptyCart = () => {
  return (
    <>
      <StyledEmptyListTitle>
        <h4>Carrinho de compras</h4>
      </StyledEmptyListTitle>
      <StyledEmptyList>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione itens</p>
      </StyledEmptyList>
    </>
  );
};
