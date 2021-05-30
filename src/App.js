import React from 'react';
import T from 'prop-types';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { AdsPage, DetailPage, NewListingPage } from './components/ads';
import Layout from './components/layout';
import { LoginPage, PrivateRoute } from './components/auth';

import './App.css';
import { tagsLoadAction } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getTags, getUiError } from './store/selectors'

function App({ history }) {
  const [title, setTitle] = React.useState('Anuncios');
  const [searchParams, setSearchParams] = React.useState({
    name: '',
    sale: null,
    tags: 'todas las categorías',
    priceMin: 0,
    priceMax: process.env.REACT_APP_MAX_PRICE
  });
  // const [error, setError] = React.useState('')
  const error = useSelector(getUiError)
  const dispatch = useDispatch();
  const tags = useSelector(getTags);

  React.useEffect(() => {
    dispatch(tagsLoadAction()); 
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <LoginPage />     
          </Route>
          <PrivateRoute 
            path="/advert/new"
            render={routerProps => 
                <NewListingPage 
                  tags={tags}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  routerProps={routerProps}
                />
            }
          />
          <PrivateRoute path="/advert/:id">
            {
              routerProps =>
                  <Layout
                    tags={tags}
                    routerProps={routerProps}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    title={title}
                  >
                    <DetailPage value={routerProps} tags={tags} setTitle={setTitle} searchParams={searchParams}/>        
                  </Layout>            
            }
          </PrivateRoute>
          <PrivateRoute exact path="/adverts">
            <Layout
              tags={tags}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              title={title}
            >
              <AdsPage 
                searchParams={searchParams}
                setTitle={setTitle} 
              />
            </Layout>
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Redirect to="/adverts" />
          </PrivateRoute>
          <Route path="/404">
            <div>404 Not Found</div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>     
    </div>
  );
};

export default App;
