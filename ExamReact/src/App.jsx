import { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";
import ProductForm from "./Components/ProductForm";
import "./app.css";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("Hello");
  });

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="addProduct">
      <h1>Product list</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
