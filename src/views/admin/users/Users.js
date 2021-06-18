import { useState } from "react";
import User from "../components/User";

const Users = () => {
  const [activeLink, setActiveLink] = useState("all users");

  const userListHeader = () => (
    <div className="admin-users-list-header d-flex">
      <p>PP</p>
      <p>User ID</p>
      <p> Name</p>
      <p>Mobile</p>
      <p>Email</p>
      <p>Profile Type</p>
      <p>ID Proof</p>
      <p>GST Information</p>
      <p>City-State-Pincode</p>
      <p>Status </p>
    </div>
  );

  const userNavLink = (title) => {
    return (
      <h2
        className={activeLink === title ? "active" : ""}
        onClick={() => setActiveLink(title)}
      >
        {title}
      </h2>
    );
  };

  return (
    <div className="admin-users d-flex-col">
      <div className="d-flex admin-users-nav">
        {userNavLink("all users")}
        {userNavLink("new applicants")}
        {userNavLink("buyers")}
        {userNavLink("sellers")}
        {userNavLink("agents")}
      </div>
      {userListHeader()}
      <div className="admin-users-list">
        {activeLink === "all users" && (
          <>
            <User />
            <User />
            <User newApplicant={true} />
            <User newApplicant={true} />
            <User newApplicant={true} />
            <User newApplicant={true} />
          </>
        )}

        {activeLink === "new applicants" && (
          <>
            <User newApplicant={true} />
            <User newApplicant={true} />
            <User newApplicant={true} />
            <User newApplicant={true} />
          </>
        )}
        
        
      </div>
    </div>
  );
};

export default Users;
