import React from 'react'
import './App.css';
import AdsPage from './components/ads/js/AdsPage'
import Layout from './components/layout'
import { LoginPage } from './components/auth'

function App() {
  const [title, setTitle] = React.useState('Anuncios')

  return (
    <div className="App">
      {/* <Button variant="primary" children="Log in"/> */}
      {/* <Layout title={title}>
        <AdsPage setTitle={setTitle}/>
      </Layout> */}
      <LoginPage />
    </div>
  );
};

export default App;
