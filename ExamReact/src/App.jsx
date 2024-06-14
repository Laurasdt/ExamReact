import { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";
import ProductForm from "./Components/ProductForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    console.log("UseEffect");
  }, []);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="addProduct">
      <h1>Product list</h1>
      <button onClick={notify}>Let's add a product !!</button>
      <ToastContainer />
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
};

export default App;
