import { PRODUCTS } from "./assets/products";
import Product from "./components/product";
import "./style.scss";

const React7 = () => {
  return (
    <div className="react7">
      <div className="shop">
        <div className="shopTitle">
          <h1>UIT Shop</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React7;
