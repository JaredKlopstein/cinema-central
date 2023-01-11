import React, { useState } from 'react'
import './NavBar.css'
import Logo from '../assets/fulllogo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom'
import {auth } from '../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button,Input } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


function NavBar() {
  const [user] = useAuthState(auth);
  const [color, setColor] = useState(false);
  const [search,setSearch] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'navbar nav-active ' : 'navbar'}>
        <div className="navbar__Left">
            <Link><img src={Logo} alt="" className='navbar__logo' /></Link>
              <div className="navbar__option">
              <div className="navbar__Browse">
              Browse<ArrowDropDownIcon/>
              </div>
                </div>
              <div className="navbar__option">
                <Link className="navbar__link" to="/">Home</Link>
                </div>
              <div className="navbar__option">
                <Link className="navbar__link no__cursor" to="/new">New &#38; Popular</Link>
                </div>
                {user &&  
                  <div className="navbar__option">
                  <Link className="navbar__link no__cursor" to="/mylist">My List</Link>
                  </div>}
        </div>
        <div className="navbar__Right">
            { search ? <>
 <Input placeholder="Search" className='navbar__Search' variant="filled"/>
 <CloseIcon onClick={() => setSearch(false)} className='navbar__Icon'></CloseIcon>
            </>
 :
<SearchIcon className='navbar__Icon' onClick={() => setSearch(true)}/>
            }
            <div className="navbar__Avatar">
              {user ? <>
              <NotificationsOutlinedIcon className='navbar__Icon'/>
              <Avatar className='navbar__Icon' onClick={() => auth.signOut()} src={user?.photoURL}/> </> :
              <>
              <Link className='navbar__Btn' to='/signin'>
              <Button  variant="contained">Sign In</Button>
              </Link>
              <Link className='navbar__Btn' to='/signup'>
              <Button variant="contained">Sign Up</Button>
              </Link>
              </> 
              }
            
            </div>
        </div>
    </div>
  )
}

export default NavBar