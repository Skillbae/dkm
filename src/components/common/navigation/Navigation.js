import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import DropDown from "./Dropdown";
import { message } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import brandLogo from "../../../assets/images/logo/DKM-logo-Transparent-BG.png";
import { flipSideNavStatus } from "../../../redux/actions/miscAction";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log(searchInput);
    message.error("Search functionality Unavailable!!");
  };

  
  return (
    <nav className="navigation">
      <div className="hamburger">
        <MenuOutlined
          onClick={() => dispatch(flipSideNavStatus())}
          className="hamburger-icon"
        />
      </div>
      <div className=" navigation-brand-item">
        <Link to={ROUTES.HOME} className="navigation-brand-logo">
          <img src={brandLogo} alt="" />
        </Link>
      </div>

      <div className="navigation-item d-flex">
        <div className="navigation-dropdown">
          <DropDown title={"men"} />
        </div>

        <div className="navigation-dropdown">
          <DropDown title={"women"} />
        </div>

        <div className="navigation-dropdown">
          <DropDown title={"kids"} />
        </div>
        <div className="navigation-dropdown">
          <DropDown title={"new arrivals"} />
        </div>

        <div className="navigation-dropdown">
          <DropDown title={"services"} />
        </div>
      </div>

      <div className="navigation-item">
        <form onSubmit={(e) => searchSubmitHandler(e)} className="search">
          <SearchOutlined />
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>

      <div className="navigation-item">
        <div className="cart">
          <Link to={ROUTES.BASKET}>
            {" "}
            <ShoppingCartOutlined
              style={{ fontSize: "1.4rem", margin: "0 4px" }}
            />
            {basket.length} item(s)
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
