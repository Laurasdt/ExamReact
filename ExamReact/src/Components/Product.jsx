import "./product.css";

const Product = ({ name, description, price }) => {
  return (
    <div className="products">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}€</p>
    </div>
  );
};

export default Product;
