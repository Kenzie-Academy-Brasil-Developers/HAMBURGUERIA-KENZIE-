import { Main } from "./components/Main";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const localProductCart = localStorage.getItem("ProductCart");
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState(
    localProductCart ? JSON.parse(localProductCart) : []
  );
  const [search, setSearch] = useState("");

  const searchProducts = products.filter((product) =>
    search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        product.category.toLowerCase().includes(search.toLocaleLowerCase())
  );
  useEffect(() => {
    async function loadProductsData() {
      try {
        const response = await api.get();
        setProducts(response.data);
      } catch (erro) {
        console.log(erro);
      }
    }
    loadProductsData();
  }, []);

  useEffect(() => {
    localStorage.setItem("ProductCart", JSON.stringify(productCart));
  }, [productCart]);

  const addProductToCart = (currentProduct) => {
    if (!productCart.some((product) => product.id === currentProduct.id)) {
      setProductCart([...productCart, currentProduct]);
      toast.success("O item foi adicionado com sucesso!");
    } else {
      toast.error("O item já foi adicionado à lista!");
    }
  };

  const removeProductFromCart = (currentId) => {
    const newProductCart = productCart.filter(
      (product) => product.id !== currentId
    );
    setProductCart(newProductCart);
  };

  const removeAllProducts = (id) => {
    const newProduct = productCart.filter((product) => product.id === id);
    setProductCart(newProduct);
  };

  const totalValue = productCart.reduce(
    (previusValue, currentValue) => previusValue + currentValue.price,
    0
  );

  return (
    <div className="App">
      <Header setSearch={setSearch} />
      <Main
        search={search}
        searchProducts={searchProducts}
        addProductToCart={addProductToCart}
        productCart={productCart}
        removeProductFromCart={removeProductFromCart}
        totalValue={totalValue}
        setSearch={setSearch}
        removeAllProducts={removeAllProducts}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
