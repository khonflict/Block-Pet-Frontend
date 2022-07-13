import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import PetDetails from '../../components/PetDetails/PetDetails'
import UpdatePetForm from '../../components/UpdatePetForm/UpdatePetForm'

// Pages
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Pets from '../Pets/Pets'
import CreatePet from '../CreatePet/CreatePet'

// Services
import * as usersService from '../../utilities/users-service'

// CSS
import './App.css';


const App = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    if(usersService.getToken()) setUser(usersService.getUser())
  }, [])
  // console.log('hello', user)
  return (
    <div className="App">
      <Nav user={user} setUser={setUser} logOut={usersService.logOut} />

      {/* route renders the component if path matches url in address bar */}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login setUser={setUser}/>} />
        <Route path='/signup' element={ <SignUp setUser={setUser}/> } />
        {
          user &&
          <>
           <Route path='/pets' element={<Pets />} />  
          <Route path='/pets/create' element={<CreatePet />} />  
          <Route path='/pets/:id' element={<PetDetails />} />  
          <Route path='/pets/:id/edit' element={<UpdatePetForm />} /> 
          </>
        }
       
      </Routes>

      <Footer />
    </div>
  );
}

export default App;