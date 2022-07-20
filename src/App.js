
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AppNavBar from './components/AppNavBar/AppNavBar';
import './App.css';
import Login from './components/Login/Login';
import MappedUsers from './components/Pages/MappedUsers';
import AddInventory from './components/Pages/AddInventory';

function App() {
  //const [userId, setUserId] = useState("");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    
    <Router>
      <div>
      <AppNavBar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

      <Routes>
          <Route exact path='/usermap' element={<MappedUsers/>}/>
          <Route exact path='/additem' element={<AddInventory/>}/>
          <Route exact path = '/' element = {<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />}/>
          
          {/* <Route exact path = '/signup' element = {<Signup/>}/> */}
          

        </Routes>

      </div>

    </Router>
  );
}

export default App;
