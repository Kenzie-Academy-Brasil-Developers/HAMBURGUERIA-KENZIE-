import { Button } from "../../Button";

export const CartProduct = ({ productCart, removeProductFromCart }) => {
  return (
    <>
      {productCart.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <Button action={() => removeProductFromCart(product.id)}>
              Remover
            </Button>
          </li>
        );
      })}
    </>
  );
};
