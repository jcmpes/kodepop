import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../api/auth'
import { authLogout } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const handleClick = () => {
    logout().then(() => dispatch(authLogout()));
    history.push('/login');
  }

  return (
    <Button onClick={handleClick} style={{ padding: '.47rem' }}>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </Button>
  )
}

export default LogoutButton;
