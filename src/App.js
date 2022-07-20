
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AppNavBar from './components/AppNavBar/AppNavBar';
import './App.css';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import VerificationAdminHome from './components/VerificationAdminHome/VerificationAdminHome';
import RequestDetail from './components/RequestDetail/RequestDetail';

function App() {
  const [userId, setUserId] = useState("");
  
  
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [isVAdminLoggedIn, setIsVAdminLoggedIn] = useState(false);
  // const [isIAdminLoggedIn, setIsIAdminLoggedIn] = useState(false);

  return (
    
    <Router>
      <div>
      <AppNavBar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

      <Routes>
          <Route exact path = '/' element = {<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}  />}/>
          
          {/* <Route exact path = '/signup' element = {<Signup/>}/> */}
          <Route exact path = '/vadminhome' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><VerificationAdminHome userId = {userId}/></ProtectedRoute>}/>

          <Route exact path = '/requestdetail/:reqId' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><RequestDetail/></ProtectedRoute>}/>

        </Routes>

      </div>

    </Router>
  );
}

export default App;
