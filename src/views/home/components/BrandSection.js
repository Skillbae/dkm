import { Link } from "react-router-dom"

import * as ROUTES from "../../../constants/routes";
import { RightCircleOutlined} from "@ant-design/icons";

const BrandCard = ({title, img}) => {
  return(
    <div className="brand-card-wrapper d-flex ">
      <div className="brand-card-img">
        <img src={img} alt="top-brands-logo"/>
      </div>
      <p className="brand-card-title">{title}</p>
    </div> 
  )
}


const BrandSection = () => {
  // const imgUrl = "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  const imgUrl = {
    one : "https://images.pexels.com/photos/4428388/pexels-photo-4428388.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    two : "https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    three : "https://images.pexels.com/photos/4602025/pexels-photo-4602025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    four : "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
  return (
    <div className="brand-section-wrapper">
      <div className="brand-section">
        <div className="brand-section-header d-flex ">
          <h1>Top Brands</h1>
          <Link to={ROUTES.SHOP} className="brand-section-view-link">
            <span>View All</span> 
            <RightCircleOutlined />
          </Link>
        </div>

        <div className="brand-section-content d-flex">
          <BrandCard title={"Drippin Monkey"} img={imgUrl.one} />
          <BrandCard title={"Drippin Monkey"} img={imgUrl.two} />
          <BrandCard title={"Drippin Monkey"} img={imgUrl.three} />
          <BrandCard title={"Drippin Monkey"} img={imgUrl.four} />
        </div>
      
      </div>
    </div>
  )
}

export default BrandSection;


