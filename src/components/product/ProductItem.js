import React from 'react'
import { HeartOutlined } from '@ant-design/icons';
import { Rate} from 'antd';
import { Link } from 'react-router-dom';


const ProductItem = ({product}) => {
  
  return (
    <Link className="product-item" to={`/product/${product.id}`}>
      <div className="product-item-image-wrapper d-flex-center">
        <img src={product.imgUrl} alt="" className="product-img"/>
      </div>
      
      <div className="product-details">
        <div>
          <div className="product-rating"><Rate disabled defaultValue={product.rating} /></div>
          <div className="product-name">
            <span> {product.title} </span>
            <div className="flex-spacer"/>
            <div className="product-add-wishlist-icon"><HeartOutlined /></div>
          </div>
          
          <hr/>
        </div>
        <p className="product-description">{product.description}</p>
        <h3 className="product-price">{`$${product.price}`}</h3>
      </div>
      

      

    </Link>
  )
}

ProductItem.defaultProps = {
  product : {
    title : "sample product",
    description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores animi, modi eum nesciunt doloribus tempora officiis voluptatem repellat labore ipsam reprehenderit qui facilis iste, ad obcaecati sint temporibus quidem corporis.",
    price : 200,
    rating : 4,
    imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Solid_grey.svg/512px-Solid_grey.svg.png"

  }
}


export default ProductItem
