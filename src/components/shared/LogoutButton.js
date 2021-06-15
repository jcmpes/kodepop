import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { authLogoutAction } from '../../store/actions';
import { useDispatch } from 'react-redux';


const LogoutButton = () => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(authLogoutAction());
  }

  return (
    <Button onClick={handleClick} style={{ padding: '.47rem' }}>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </Button>
  )
}

export default LogoutButton;
