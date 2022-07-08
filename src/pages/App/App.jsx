import { Routes, Route } from 'react-router-dom'
// Components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
// Pages
import Home from '../Home/Home'
import Login from '../Login/Login'
// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      {/* client-side route that renders the component instance if the path matches the url in the address bar */}
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> } />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;