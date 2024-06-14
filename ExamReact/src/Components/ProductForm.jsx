import React, { useState } from "react";
import "./productForm.css";

const ProductForm = ({ addProduct }) => {
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
      <label htmlFor="name">Product : </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="description">Description : </label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label htmlFor="price">Price : </label>
      <input
        type="number"
        name="price"
        min="0"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input type="submit" value="Add a product" />
    </form>
  );
};

export default ProductForm;
