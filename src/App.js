import React from 'react'
import './App.css';
import AdsPage from './components/ads/js/AdsPage'
import Layout from './components/layout'
import { LoginPage } from './components/auth'

function App() {
  const [title, setTitle] = React.useState('Anuncios')
  const [user, setUser] = React.useState(null)

  const handleLogin = userId => setUser(userId)
  const handleLogout = () => setUser(null)
  
  return (
    <div className="App">
      {/* <Button variant="primary" children="Log in"/> */}
      
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
