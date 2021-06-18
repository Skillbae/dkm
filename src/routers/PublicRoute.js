import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Footer from "../components/common/Footer";
import Navigation from "../components/common/navigation/Navigation";

const PublicRoute = ({ component: Component, ...rest }) => {
  const  auth  = useSelector((state) => state.auth);
  console.log(auth)
  return (
    <Route
      {...rest}
      component={(props) =>
        auth && auth.role === "ADMIN" ? (
          <Redirect to="/admin/dashboard" />
        ) : (
          <>
            <Navigation />
            <Component {...props} />
            <Footer />
          </>
        )
      }
    ></Route>
  );
};

export default PublicRoute;
