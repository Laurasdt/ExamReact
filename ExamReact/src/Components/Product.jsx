const Product = ({ name, description, price }) => {
  return (
    <div className="products">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
