import { DeleteOutlined ,MinusSquareOutlined,  PlusSquareOutlined} from "@ant-design/icons"
import { message } from "antd"
import { useDispatch } from "react-redux"
import QuantityPicker from "../../../components/common/QuantityPicker"
import { removeFromBasket, increaseQtyItem, decreaseQtyItem } from "../../../redux/actions/basketActions"
const BasketItem = ({product}) => {
  const dispatch = useDispatch()
  
  const removeItemHandler = () => {
    dispatch(removeFromBasket(product.id))
    message.warning("Item removed from cart")
  }

  const increaseQtyHandler = () => {
    if( !(product.quantity >= 10)){
      dispatch(increaseQtyItem(product.id))  
    } else {
      message.error("Quantity can not be more than 10")
    }
    
  }
  const decreaseQtyHandler = () => {
    if( !(product.quantity <= 1)){
      dispatch(decreaseQtyItem(product.id))  
    } else{
      message.error("Quantity can not be less than 1")
    }
    
  }
  const totalPrice = product.price * product.quantity;
  return (
    <div className="basket-item">
      <div className="basket-item-img">
        <img src={product.imgUrl} alt=""/>
      </div>

      <div className="basket-item-description">
        <p>{product.title}</p>
        <p>Color : {product.color}</p>
        <p>Size : {product.size}</p>
      </div>

      <div className="basket-item-price">
        <span>{`$${product.price}`}</span>
      </div>

      <div className="basket-item-quantity ">
        <QuantityPicker
          currentQuantity={product.quantity}
          decreaseHandler={decreaseQtyHandler}
          increaseHandler={increaseQtyHandler}
        />
      </div>

      <div className="basket-item-total">
        <span>{`$${totalPrice}`}</span>
      </div>
      <div className="basket-item-delete d-flex-center">
        <DeleteOutlined 
        onClick={removeItemHandler}
          style={{fontSize : "1.4rem"}}/>
      </div>
    </div>
  )
}

export default BasketItem;

