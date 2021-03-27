import './App.css';
import AdsPage from './components/ads/AdsPage'
import Button from './components/shared/Button'

function App() {
  return (
    <div className="App">
      <Button variant="primary" children="Log in"/>
      <AdsPage />
    </div>
  );
};

export default App;
