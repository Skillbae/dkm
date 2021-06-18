import { Redirect, Route } from 'react-router-dom';
import AdminNavigation from '../components/common/AdminNavigation';
import AdminSidePanel from '../components/common/AdminSidePanel';
import PropType from 'prop-types';
import { connect } from 'react-redux';


const AdminRoute = ({isAuth, role, component: Component, ...rest}) => {
  console.log({isAuth, role, component: Component, ...rest})
  return(
  <Route
    {...rest}
    component={(props) => (
      isAuth && role === 'ADMIN' ? (
        <>
          <AdminNavigation />
          <main className="content-admin">
            <AdminSidePanel />
            <div className="content-admin-wrapper">
              <Component {...props} />
            </div>
          </main>
        </>
      ) : <Redirect to="/" />
    )}
  />
)};

const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth,
  role: auth?.role || ''
});


AdminRoute.defaultProps = {
  isAuth: false,
  role: 'USER'

};

AdminRoute.propTypes = {
  isAuth: PropType.bool,
  role: PropType.string,
  component: PropType.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  rest: PropType.any
};

// TODO: Connect ADMIN to store
export default connect(mapStateToProps)(AdminRoute);
// export default AdminRoute