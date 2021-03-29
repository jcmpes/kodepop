import './App.css';
import AdsPage from './components/ads/js/AdsPage'
import Layout from './components'

function App() {
  return (
    <div className="App">
      {/* <Button variant="primary" children="Log in"/> */}
      <Layout title="Anuncios">
        <AdsPage />
      </Layout>
    </div>
  );
};

export default App;
