const ProductFrom = () => {
  return (
    <form>
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
