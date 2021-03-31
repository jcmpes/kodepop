import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import storage from './utils/storage'
import { clearSession } from './api/client';
import { AdsPage, DetailPage } from './components/ads';
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

  const DetailContext = React.createContext()

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
          <Route path="/listing/:id">
            {
              routerProps =>
                <DetailContext.Provider value={routerProps}>
                  <Layout title={title} onLogout={handleLogout}>
                    <DetailContext.Consumer>
                      {value => <DetailPage value={value} setTitle={setTitle}/>}

                    </DetailContext.Consumer>
                  </Layout>
              
                </DetailContext.Provider>
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
