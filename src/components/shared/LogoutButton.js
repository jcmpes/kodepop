import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../api/auth'
import { authLogout } from '../../store/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


const LogoutButton = (onLogout) => {
  const history = useHistory();
  
  const handleClick = () => {
    logout().then(onLogout);
    history.push('/login')
  }

  return (
    <Button onClick={handleClick} style={{ padding: '.47rem' }}>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </Button>
  )
}



const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authLogout())
})

export default connect(null, mapDispatchToProps)(LogoutButton);
