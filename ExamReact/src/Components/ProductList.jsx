import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
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
