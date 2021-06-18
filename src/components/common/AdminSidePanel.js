import * as ROUTES from "../../constants/routes";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { flipSideNavStatus } from "../../redux/actions/miscAction";
import { ArrowLeftOutlined } from "@ant-design/icons";
const AdminSidePanel = () => {
  const isSideNavVisible = useSelector((state) => state.app.isSideNavVisible);
  const dispatch = useDispatch();

  return (
    <aside
      className={isSideNavVisible ? "sidenavigation open" : "sidenavigation"}
    >
      <div
        className={
          isSideNavVisible
            ? "sidenavigation-wrapper open"
            : "sidenavigation-wrapper"
        }
      >
        <div
          className="sidenavigation-back-btn d-flex"
          onClick={() => dispatch(flipSideNavStatus())}
        >
          <span>
            {" "}
            <ArrowLeftOutlined />
          </span>
          <h3>Go Back</h3>
        </div>
        <div className="sidenavigation-item">
          <NavLink
            activeClassName="sidenavigation-menu-active"
            className="sidenavigation-menu "
            to={ROUTES.ADMIN_DASHBOARD}
          >
            Dashboard
          </NavLink>
        </div>
        <div className="sidenavigation-item">
          <NavLink
            activeClassName="sidenavigation-menu-active"
            className="sidenavigation-menu "
            to={ROUTES.ADMIN_PRODUCTS}
          >
            Products
          </NavLink>
        </div>
        <div className="sidenavigation-item">
          <NavLink
            activeClassName="sidenavigation-menu-active"
            className="sidenavigation-menu "
            to={ROUTES.ADMIN_USERS}
          >
            Users
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidePanel;
