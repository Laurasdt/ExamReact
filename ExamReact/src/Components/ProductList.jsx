import { useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="product-list">
      <ProductForm addProduct={addProduct} />
      {products.map((product, idx) => (
        <Product
          key={idx}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
