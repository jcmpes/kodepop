import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ user, ...props }) => {
    return user ? <Route {...props} /> : <Redirect to="/login" />
};

export default PrivateRoute;