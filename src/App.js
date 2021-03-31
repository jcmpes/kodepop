import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import storage from './utils/storage'
import { clearSession } from './api/client';
import AdsPage from './components/ads/js/AdsPage';
import Layout from './components/layout';
import { LoginPage } from './components/auth';

import './App.css';

function App({ existingToken }) {
  const [title, setTitle] = React.useState('Anuncios')
  const [user, setUser] = React.useState(null)

  const handleLogin = userId => {
    setUser(userId);
    // history.push('/');
  }

  const handleLogout = () => {
    setUser(null);
    clearSession();
  }

  React.useEffect(() => {
    if (existingToken) {
      setUser(storage.get('user'))
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            {() => 
              user ? <Redirect to="/" /> :
              <LoginPage onLogin={handleLogin} />
            }      
          </Route>

          <Route exact path="/">
            { user ?
              <Layout title={title} onLogout={handleLogout}>
                <AdsPage setTitle={setTitle}/>
              </Layout> :
              <Redirect to='/login' />
            }
          </Route>
          <Route path="/404">
            <div>404 Not Found</div>
          </Route>
          <Route><Redirect to="/404" /></Route>
        </Switch>
      </Router>     
    </div>
  );
};

export default App;
