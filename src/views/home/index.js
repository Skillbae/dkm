
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import { Carousel } from 'antd';
import { 
  RightCircleOutlined,
  CalculatorOutlined,
  WalletOutlined,
  CustomerServiceOutlined
} from "@ant-design/icons"
import bannerOne from "../../assets/images/banner-01.jpg"
import bannerTwo from "../../assets/images/banner-02.png"
import bannerThree from "../../assets/images/banner-03.png"

import nikeBlue from "../../assets/images/nike-blue-shoe.jpg"
import yellowJacket from "../../assets/images/man-in-yellow-hoodie.jpg"
import greyJacket from "../../assets/images/man-in-grey-hoodie.jpg"
import blackWatch from "../../assets/images/black-watch.jpg"
import InfoCards from './components/InfoCards';
import BrandSection from './components/BrandSection';
import NewsLetter from './components/NewsLetter';



const Home = (props) => {
  // console.log({props})
   
  return (
    <div>
      <Carousel autoplay effect={'fade'} className="none" >
        <div className="home-carousel carousel-1">
          <div className="carousel-content">
            <p className="carousel-preheading">Women's Fashion</p>
            <h1 className="carousel-heading">
              <span>Shop for your</span>
              <span>stores</span>   
            </h1>
            <Link to={ROUTES.SHOP} className="home-shop-now-btn">
             <span>Shop now</span>
            </Link>
          </div>
          <div className="carousel-img"><img src={bannerThree} alt=""/></div>
        </div>

        <div className="home-carousel carousel-2">
          <div className="carousel-content">
            <p className="carousel-preheading">New Arrivals</p>
            <h1 className="carousel-heading">
              <span>Winter</span>
              <span>Collections</span>   
            </h1>
            <Link to={ROUTES.SHOP} className="home-shop-now-btn">
             <span>Shop now</span>
            </Link>
          </div>
          <div className="carousel-img"><img src={bannerTwo} alt=""/></div>
        </div>

        <div className="home-carousel carousel-3">
          <div className="carousel-content">
            <p className="carousel-preheading">Women's Fashion</p>
            <h1 className="carousel-heading">
              <span>Get upto 30% off</span>
              <span>New Arrivals</span>   
            </h1>
            <Link to={ROUTES.SHOP} className="home-shop-now-btn">
             <span>Shop now</span>
            </Link>
          </div>
          <div className="carousel-img"><img src={bannerOne} alt=""/></div>
        </div>

      </Carousel>
      
      <section className="home-new-arrivals ">
        <div className="new-arrival-heading">
          <h3>New Arrivals</h3>
          <Link className="new-arrival-link" to={ROUTES.SHOP} >
            <span>View All</span> 
            <RightCircleOutlined  />
          </Link>
        </div>
        <div className="new-arrivals-grid">
          <div className="grid-item tall-grid-item grid-item-1">
            <img src={yellowJacket} alt=""/>
            <div className="grid-item-content ">
              <span>Hoodies</span>
              <h2>No. 5</h2>
              <span>30% off sale</span>
            </div>
          </div>
          <div className="grid-item grid-item-2">
            <img src={greyJacket} alt=""/>
            <div className="grid-item-content">
              <span>upto</span>
              <h2><span>50%</span><span>OFF</span></h2>
            </div>
          </div>
          <div className="grid-item grid-item-2">
            <img src={blackWatch} alt=""/>
            <div className="grid-item-content">
              <span>upto</span>
              <h2><span>40%</span><span>OFF</span></h2>
            </div>
          </div>
          <div className="grid-item long-grid-item grid-item-4">
            <img src={nikeBlue} alt=""/>
            <div className="grid-item-content">
              <span>All new</span>
              <h2>Sneaker No. 1</h2>
            </div>
          </div>
        </div>
      </section>

      
      <BrandSection/>
      <NewsLetter/>
    </div>
  )
}

export default Home;



