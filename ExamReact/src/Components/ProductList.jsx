import { useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";

const ProductList = ({ products }) => {
  const [product, setProduct] = useState([
    {
      name: "Pomme",
      description: "Un fruit de saison",
      price: 1,
    },
  ]);
  return (
    <div className="product-list">
      <ProductForm />
      {product.map((product, idx) => (
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
