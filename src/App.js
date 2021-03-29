import React from 'react'
import './App.css';
import AdsPage from './components/ads/js/AdsPage'
import Layout from './components'

function App() {
  const [title, setTitle] = React.useState('Anuncios')

  return (
    <div className="App">
      {/* <Button variant="primary" children="Log in"/> */}
      <Layout title={title}>
        <AdsPage setTitle={setTitle}/>
      </Layout>
    </div>
  );
};

export default App;
