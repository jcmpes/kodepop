import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getIsLogged } from '../../../store/selectors';

const PrivateRoute = ({ user, ...props }) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />
};

export default PrivateRoute;