import { PRODUCTS } from "./assets/products";
import Product from "./components/product";
import "./style.scss";
import Menu from "./components/menu";

const React7 = () => {
  return (
    <div className="react7">
      <Menu />
      <div className="shop">
        <div className="container">
          <div className="row">
            {PRODUCTS.map((product) => (
              <div className="col-12 col-md-6 col-lg-4">
                <Product data={product} key={product.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React7;
