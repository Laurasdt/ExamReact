import { useState } from "react";
import Product from "./Product";
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
