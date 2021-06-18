import { ADMIN_DASHBOARD } from '../../constants/routes';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {MenuOutlined} from "@ant-design/icons"

// import UserAvatar from 'views/account/components/UserAvatar';
import brandLogo from  "../../assets/images/logo/DKM-logo-Transparent-BG.png"
import UserAvatar from './UserAvatar';
import {flipSideNavStatus} from "../../redux/actions/miscAction"

const AdminNavigation = () => {
  const dispatch = useDispatch()
  
  return (
    <nav className="navigation navigation-admin d-flex">
      
      <div className="logo d-flex">
        <div className="hamburger">
          <MenuOutlined onClick={()=>dispatch(flipSideNavStatus())} className="hamburger-icon"/>
        </div>
        <Link to={ADMIN_DASHBOARD} className="admin-brand-link">
          <img alt="Logo" src={brandLogo} />
          <h3 className="navigation-brand-name">ADMIN PANEL</h3>
        </Link>
      </div>

      <ul className="admin-navigation-menu">
        <li className="menu-item"> 
          <UserAvatar/>
        </li>
      </ul>

      
     
    </nav>
  )
}

export default AdminNavigation

