import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const mensMenuItems = {
  topWear : ["Creams", "T-shirt", "Jacket", "Creams", "T-shirt", "Jacket"]

}
const menuSection = (
  mensMenuItems.topWear.map((item, index) => (
    <div className="dropdown-section-item" key={index}>
      <a href="#h">{item}</a>
    </div>
  ))
   
)

const mensMenu = (
  <Menu className="navigation-dropdown-content d-flex" style={{backgroundColor:  "#f0f0f0"}}>
    <div className="dropdown-section" style={{borderRight: "1px solid #c5c5c5", marginLeft : "2.4rem"}}>
      <h3 className="dropdown-section-title">Top Wear</h3>
      {menuSection}

    </div>

    <div className="dropdown-section" style={{borderRight: "1px solid #c5c5c5"}}>
      <h3 className="dropdown-section-title"  >Bottom Wear</h3>
      {menuSection}
      
    </div>

    <div className="dropdown-section" style={{borderRight: "1px solid #c5c5c5"}}>
      <h3 className="dropdown-section-title"  >Inner Wear</h3>
      {menuSection}
    </div>

    <div className="dropdown-section">
      <h3 className="dropdown-section-title">Accessories</h3>
      {menuSection}
    </div>
    
  </Menu>
)


const DropDown = ({title}) => {


  return (
    <Dropdown overlay={mensMenu} >
      <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <div className="dropdown-title">
          {title} 
          <DownOutlined
            style={{fontSize: "0.8rem", margin : "0 4px"}}
          />
        </div>
      </Link>
    </Dropdown>
  )
}

export default DropDown





