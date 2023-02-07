import { Button } from "../Button";
import { StyledTotalValue } from "./style";

export const TotalValue = ({ totalValue, removeAllProducts }) => {
  return (
    <StyledTotalValue>
      <div>
        <h1>Total</h1>
        <p>
          {totalValue.toFixed(2).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <Button action={removeAllProducts}>Remover todos</Button>
    </StyledTotalValue>
  );
};
