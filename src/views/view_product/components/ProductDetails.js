import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import QuantityPicker from '../../../components/common/QuantityPicker';
import { Tooltip, message } from 'antd';


const ProductDetails = ({product, quantity, setQuantity, addToCartHandler}) => {
  
  
  

  const increaseHandler = () => {
    if(!(quantity <= 1)){
      setQuantity(quantity + 1)
    }
  }
  const decreaseHandler = () => {
    if( !(quantity <= 1)){
      setQuantity(quantity - 1)
    }
    else{
      message.error("Quantity can not be less than 1 ")
    }

  }
  
  
  
  return (
    <div className="viewProduct-productDetails">
      <div className="viewProduct-images-wrapper d-flex-col ">

        <div className="viewProduct-primaryImg">
          <div className="icons">
            <HeartOutlined style={{color : "grey", fontSize: "1.6rem"}}/>
          </div>
          <img src={product.imgUrl} alt="" className="product-img"/>
        </div>

        <div className="d-flex-sp-arr w-100" >
          <div className="viewProduct-secondaryImg">
            <img src={product.imgUrl} alt="" className="product-img"/>
          </div>
          <div className="viewProduct-secondaryImg">
            <img src={product.imgUrl} alt="" className="product-img"/>
          </div>
          <div className="viewProduct-secondaryImg">
            <img src={product.imgUrl} alt="" className="product-img"/> 
          </div>
        </div>
        
      </div>

      

      <div className="viewProduct-details">
        <h1 className="viewProduct-title ">{product.title}</h1>
        <div className="viewProduct-description ">
          <p>OVERVIEW</p>
          <p>{product.description}</p>
        </div>
        <h1 className="viewProduct-price capitalize">{`$${product.price}`}</h1>

        <div className="viewProduct-sizePicker">
          <p>SIZE</p>
          <div className="d-flex">
            <div className="viewProduct-size d-flex-center"><span>S</span></div>
            <div className="viewProduct-size d-flex-center"><span>M</span></div>
            <div className="viewProduct-size d-flex-center"><span>L</span></div>
            <div className="viewProduct-size d-flex-center"><span>XL</span></div>
          </div>
        </div>

        <div className="viewProduct-colorPicker">
          <p>COLOR</p>
          <div className="d-flex">
            <Tooltip title="black">
              <div 
                className="viewProduct-color" 
                style={{backgroundColor : "black"}}
              />
            </Tooltip>
            <Tooltip title="navy">
              <div 
                className="viewProduct-color" 
                style={{backgroundColor : "navy"}}
              />
            </Tooltip>
            <Tooltip title="orange">
              <div 
                className="viewProduct-color" 
                style={{backgroundColor : "orange"}}
              />
            </Tooltip>
            <Tooltip title="royalblue">
              <div 
                className="viewProduct-color" 
                style={{backgroundColor : "royalblue"}}
              />
            </Tooltip>
          </div>
        </div>

        <div className="viewProduct-quantity">
          <QuantityPicker 
            currentQuantity={quantity} 
            increaseHandler={increaseHandler} 
            decreaseHandler={decreaseHandler} 
          />
        </div>
        <div className="viewProduct-add-to-basket-btn d-flex-center" onClick={addToCartHandler}>
          <ShoppingCartOutlined style={{fontSize : "1.4rem"}} />
          <span> Add to Cart</span>
        </div>
      </div>        
    </div>
  )
}

export default ProductDetails
