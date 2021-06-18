import * as ROUTES from "../../constants/routes"

import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import BasketItemContainer from "./components/BasketItemContainer"
import Voucher from "./components/Voucher"
import PriceBreakdown from "./components/PriceBreakdown"
import RelatedProducts from "../../components/common/RelatedProducts"
import { useSelector } from "react-redux"

import emptyCart  from "../../assets/images/empty_cart.svg"

const Basket = () => {
  const basket = useSelector(state => state.basket);
  console.log(basket.length)
  return (
    <div className="basket">
      <div className="basket-container">

        <div className="basket-header">
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to={ROUTES.HOME}> Home </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={ROUTES.BASKET}> Cart </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="basket-heading">CART</h1>
        </div>
        {
          basket.length > 0 ? (
            <>
            <BasketItemContainer/>

            <div style={{ display : "flex", margin : "4rem 0",   borderTop: "1px solid #c5c5c5" }}>
              <Voucher/>
              <PriceBreakdown/>
            </div>
    
            <RelatedProducts/>
            </>
          ) : (
            <div className="basket-empty ">
            <img src={emptyCart} alt="empty-cart-vector" />
              <div className="d-flex">
                <h2>There is nothing in your cart.</h2>
                <Link to="/shop">  Shop now </Link>
              </div>
            </div>
          )
        }
      </div>
      
    </div>
  )
}

export default Basket;

