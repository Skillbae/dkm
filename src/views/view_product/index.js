import { Breadcrumb } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import RelatedProducts from '../../components/common/RelatedProducts'
import { useScrollTop } from '../../hooks'
import ProductDetails from "./components/ProductDetails"
import {  message } from 'antd';
import { useState } from 'react'
import { addToBasket } from '../../redux/actions/basketActions'
import NotFound from '../error/NotFound'



const ViewProduct = () => {
  useScrollTop();
  const { productId } = useParams();
  const product = useSelector(state => state.product.find(item => item.id === productId));
  const [ quantity, setQuantity ] = useState(1);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addToBasket({
      ...product,
      quantity : quantity
    }));
    message.success(`${product.title} added to basket`);
  }
  if(!product){
    return(
      <NotFound/>
    )
  }

  return (
    <div className="viewProduct">
      <div className="viewProduct-wrapper">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/"> Home </Link> 
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/shop"> Shop </Link> 
          </Breadcrumb.Item>
          <Breadcrumb.Item>Page 1 of 1</Breadcrumb.Item>
          <Breadcrumb.Item>Detailed Product</Breadcrumb.Item>
        </Breadcrumb>

        <ProductDetails 
          quantity={quantity} 
          setQuantity={setQuantity}
          addToCartHandler={onClickHandler}
          product={product}
        />

        <div className="viewProduct-detail-description">
          <h1>Detail Description</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae praesentium eligendi laborum, quaerat quo, ducimus sequi, vel dolorum velit quidem accusamus? Exercitationem, debitis eveniet dignissimos tempora, explicabo earum labore quas sunt a ea facere animi doloribus ducimus recusandae possimus eos illum dolorem asperiores illo hic sit culpa harum nesciunt quidem. Quaerat architecto, quam, sit nam sequi aliquam qui impedit dolore ipsum doloremque cum natus nihil enim esse ut totam voluptate autem, ratione ex? Molestias maxime cupiditate fuga iste ad, vitae accusantium. A assumenda explicabo alias quam modi veniam harum pariatur, quod hic officiis nihil veritatis ipsam quo quos consequatur amet!</p>
        </div>

        <RelatedProducts/>


      </div>
    </div>
  )
}

export default ViewProduct
