import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ADD_PRODUCT } from "../../../constants/routes";

const ProductsNavbar = () => {
  return (
    <div className="products-navbar d-flex">
      <h2>Products</h2>
      <div className="flex-spacer" />
      <Link className="btn-black" to={ADD_PRODUCT}>
        <PlusOutlined className="plus-icon" /> Add new product
      </Link>
    </div>
  );
};

export default ProductsNavbar;
