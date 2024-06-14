import { useState } from "react";

const ProductFrom = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price: parseFloat(price),
    };
    addProduct(newProduct);
    setName("");
    setDescription("");
    setPrice("");
    console.log("Ajout d'un produit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />
      <label htmlFor="price">Price</label>
      <input type="number" name="price" min="0" id="price" />
      <input type="submit" value="Add a product" />
    </form>
  );
};

export default ProductFrom;
