import React from 'react';
import storage from './utils/storage'
import { clearSession } from './api/client';
import AdsPage from './components/ads/js/AdsPage';
import Layout from './components/layout';
import { LoginPage } from './components/auth';

import './App.css';

function App({ existingToken }) {
  const [title, setTitle] = React.useState('Anuncios')
  const [user, setUser] = React.useState(null)

  const handleLogin = userId => setUser(userId)
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
      { user == null ? 
        <LoginPage onLogin={handleLogin} /> :
        <Layout title={title} onLogout={handleLogout}>
          <AdsPage setTitle={setTitle}/>
        </Layout>
      }
    </div>
  );
};

export default App;
