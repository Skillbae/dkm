import { Route, Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import * as view from './views/';
import { createBrowserHistory } from 'history';
import AdminRoute from './routers/AdminRoute';
import PublicRoute from './routers/PublicRoute';
import Footer from './components/common/Footer';
import Navigation from './components/common/navigation/Navigation';




export const history = createBrowserHistory();

function App() {
  

  return (
    <Router history={history}>
      
      <Switch>
        <PublicRoute 
          component={view.Home}
          exact
          path={ROUTES.HOME}
        />

        <PublicRoute 
          component={view.Shop}
          exact
          path={ROUTES.SHOP}
        />

        <PublicRoute 
          component={view.Basket}
          exact
          path={ROUTES.BASKET}
        />

        <PublicRoute 
          component={view.ViewProduct}
          exact
          path={ROUTES.VIEW_PRODUCT}
        />
        {/* ==== ADMIN ROUTES ====*/ }
        <AdminRoute
          component={view.Dashboard}
          exact
          path={ROUTES.ADMIN_DASHBOARD}
        />
        <AdminRoute
          component={view.AddProduct}
          path={ROUTES.ADD_PRODUCT}
        />
        <AdminRoute
          component={view.Products}
          path={ROUTES.ADMIN_PRODUCTS}
        />
        <AdminRoute
          component={view.Users}
          path={ROUTES.ADMIN_USERS}
        />

        {/* ==== AUTH ROUTES ====*/ }

       


        <Route >
          <div style={{height : "50vh", backgroundColor : "lightcyan"}} className="d-flex-center">
            <h1>HANDLE 404 later</h1>
          </div>
        </Route> 

      </Switch>
      
    </Router>
  );
}

export default App;
