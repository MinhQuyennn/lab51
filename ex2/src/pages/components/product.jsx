const Product = (props) => {
  const { productName, price, productImage } = props.data;

  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn">Add To Cart</button>
    </div>
  );
};
export default Product;
