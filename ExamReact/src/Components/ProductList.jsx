import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Test</h1>
      <Product products={products} />
    </div>
  );
};

export default ProductList;
