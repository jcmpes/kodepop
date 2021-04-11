import React from 'react';
import T from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import storage from './utils/storage'
import { clearSession } from './api/client';
import { AdsPage, DetailPage, NewListingPage } from './components/ads';
import Layout from './components/layout';
import { LoginPage, PrivateRoute } from './components/auth';
import { getTags } from './api/adverts'

import './App.css';

function App({ existingToken }) {
  const [title, setTitle] = React.useState('Anuncios');
  const [user, setUser] = React.useState(null);
  const [searchParams, setSearchParams] = React.useState({
    name: '',
    sale: null,
    tags: 'todas las categorías',
    priceMin: 0,
    priceMax: process.env.REACT_APP_MAX_PRICE
  });
  const [tags, setTags] = React.useState([]);
  const [error, setError] = React.useState('')

  const saveTags = () => {
    try {
      // Set tags dynamically
      getTags().then(res => {
        console.log(res)
        res.unshift('todas las categorías');
        setTags(res)
        console.log(tags)
      })
    } catch (error) {
      setError('There has been a problem connecting with the server. Please log out and log in again. Thanks 🖖')
      // Set tags by default
      setTags([
        "lifestyle",
        "mobile",
        "motor",
        "work"
      ])
    }
  };

  const handleLogin = userId => {
    setUser(userId);
    saveTags();
  };

  const handleLogout = () => {
    setUser(null);
    clearSession();
  };

  React.useEffect(() => {
    if (existingToken) {
      setUser(storage.get('user'))
    }
  }, []);

  const DetailContext = React.createContext();

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
          <PrivateRoute 
            user={user}
            path="/advert/new"
            render={routerProps => 
                <NewListingPage 
                  tags={tags}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  routerProps={routerProps}
                  onLogout={handleLogout}
                />
            }
          />
          <PrivateRoute user={user} path="/advert/:id">
            {
              routerProps =>
                  <Layout
                    tags={tags}
                    routerProps={routerProps}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    title={title}
                    onLogout={handleLogout}
                  >
                  <DetailContext.Provider value={routerProps}>
                    <DetailContext.Consumer>
                      {value => <DetailPage value={value} tags={tags} setTitle={setTitle} searchParams={searchParams}/>}
                    </DetailContext.Consumer>
                  </DetailContext.Provider>
                  </Layout>
              
            }
          </PrivateRoute>
          <PrivateRoute user={user} exact path="/">
            {error !== '' && <div className="tags-error-msg" style={{ backgroundColor: 'coral', padding: '1rem' }}>{error}</div>}
            <Layout
              tags={tags}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              title={title}
              onLogout={handleLogout}
            >
              <AdsPage searchParams={searchParams} setTitle={setTitle} />
            </Layout>
          </PrivateRoute>
          <Route path="/404">
            <div>404 Not Found</div>
          </Route>
          <Route><Redirect to="/404" /></Route>
        </Switch>
      </Router>     
    </div>
  );
};

App.propTypes = {
  existingToken: T.bool.isRequired  
}

export default App;
