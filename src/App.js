import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import storage from './utils/storage'
import { clearSession } from './api/client';
import { AdsPage, DetailPage, NewListingPage } from './components/ads';
import Layout from './components/layout';
import { LoginPage, PrivateRoute } from './components/auth';
import { getTags } from './api/adverts'

import './App.css';

function App({ existingToken }) {
  const [title, setTitle] = React.useState('Anuncios')
  const [user, setUser] = React.useState(null)
  const [searchParams, setSearchParams] = React.useState({
    name: '',
    sale: null,
    tags: ''
  })
  const [tags, setTags] = React.useState([])

  const saveTags = () => {
    try {
      // Set tags dynamically
      getTags().then(res => setTags(res))
    } catch (error) {
      // Set tags by default
      setTags([
        "lifestyle",
        "mobile",
        "motor",
        "work"
      ])
    }
  }

  const handleLogin = userId => {
    setUser(userId);
    saveTags();
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
          <PrivateRoute user={user} path="/new" render={routerProps => 
            <NewListingPage searchParams={searchParams} setSearchParams={setSearchParams} routerProps={routerProps}/>}
          />
          <PrivateRoute user={user} path="/listing/:id">
            {
              routerProps =>
                  <Layout
                    routerProps={routerProps}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    title={title}
                    onLogout={handleLogout}
                  >
                  <DetailContext.Provider value={routerProps}>
                    <DetailContext.Consumer>
                      {value => <DetailPage value={value} setTitle={setTitle} searchParams={searchParams}/>}
                    </DetailContext.Consumer>
                  </DetailContext.Provider>
                  </Layout>
              
            }
          </PrivateRoute>
          <PrivateRoute user={user} exact path="/">
            <Layout
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

export default App;
