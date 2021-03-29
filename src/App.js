import './App.css';
import AdsPage from './components/ads/AdsPage'
import Layout from './components'

function App() {
  return (
    <div className="App">
      {/* <Button variant="primary" children="Log in"/> */}
      <Layout>
        <AdsPage />
      </Layout>
    </div>
  );
};

export default App;
