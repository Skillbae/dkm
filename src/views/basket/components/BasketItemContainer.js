
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { clearBasket } from "../../../redux/actions/basketActions";
import BasketItem from "./BasketItem"

const BasketItemContainer = () => {
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch()

  const clearBasketHandler = () => {
    dispatch(clearBasket())
    message.warning("Cart cleared")
  }
  
  let total = 0;
  return (
    <div className="basket-items-container">
          <div className="basket-items-container-header d-flex">
            <div className="img">
              <span>Image</span>
            </div>
            <div className="desription">
              <span>Product</span>
            </div>
            <div>
              <span>Price</span>
            </div>
            <div className="qty">
              <span>Quantity</span>
            </div>
            <div>
              <span>Total</span>
            </div>
            <div>
              <span></span>
            </div>
          </div>

          {
            basket.map(product => {
              total += parseFloat(product.price * product.quantity);

              
              return (
                <BasketItem key={product.id} product={product}/>
              )
            })
          }
          
          
          
          <div className="basket-items-container-bottom d-flex-end">
            <div className="clear-basket-btn d-flex-center" onClick={clearBasketHandler} >
             <span>Clear Cart</span>
            </div>
            <div className="flex-spacer"/>
            <div className="uppercase"><span>Total</span></div>
            <div className="bold" ><span>{`$${total}`}</span></div>
          </div>
        </div>
  )
}

export default BasketItemContainer

