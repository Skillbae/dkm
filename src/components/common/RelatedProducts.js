import ProductItem from "../product/ProductItem";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import Slider from "react-slick";
import { useRef, useState } from "react";


const RelatedProducts = ({}) => {
  const sliderRef = useRef(null)
  
  const slickSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true,
    responsive : [
      {breakpoint : 768, settings : {slidesToShow: 1} }
    ]
  }

  const sliderIconStyle = {
    fontSize: "1.6rem",
    margin: "0 1rem",
    cursor: "pointer",
  }
  return (
    <div className="related-products">
      <div className="related-products-header d-flex">
        <h1>Related Products</h1>
        <div className="flex-spacer"/>
        <div className="related-products-nav">
          <LeftOutlined 
            style={sliderIconStyle}
            onClick={()=>sliderRef.current.slickPrev()}
          />
          <RightOutlined 
            style={sliderIconStyle}
            onClick={()=>sliderRef.current.slickNext()}
          />
        </div>
      </div>

      <Slider ref={sliderRef}  {...slickSliderSettings}>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </Slider>

      

    </div>
  )
}

export default RelatedProducts
