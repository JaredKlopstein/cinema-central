import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewPopular from './pages/NewPopular';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import Reset from './pages/Reset';


function App() {


  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/new' element={<NewPopular/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/reset' element={<Reset/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
