import { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './CSS/Nav.css'
import UserContext from './context/UserContext'

const Nav = () => {
  const { logout, token } = useContext(UserContext)
  const [listItems, setListItems] = useState('')
  
  useEffect(() => {
    if(token) {
      console.log('this prints')
      setListItems( 
      <>
      <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/" onClick={logout}>Logout {localStorage.getItem("username")}</Link></li>
      </>
      )
      
    } else {
      setListItems( <>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/Signup">Signup</Link></li>
      </>
      )
    }
  }, [token])

  // function loggedIn() {
  //   return (
  //     <>
  //     <li><Link to="/companies">Companies</Link></li>
  //         <li><Link to="/jobs">Jobs</Link></li>
  //         <li><Link to="/profile">Profile</Link></li>
  //         <li><Link to="/" onClick={logout}>Logout {localStorage.getItem("username")}</Link></li>
  //     </>
  //   )
  // }

  // function loggedOut() {
  //   return ( 
  //   <>
  //     <li><Link to="/login">Login</Link></li>
  //     <li><Link to="/Signup">Signup</Link></li>
  //     </>
  //   ) 
  // }

  ////////// while testing

  // listItems = 
  // <>
  // <li><Link to="/companies">Companies</Link></li>
  //       <li><Link to="/companies/bauer-gallagher">Company/bg</Link></li>
  //       <li><Link to="/jobs">Jobs</Link></li>
  //       <li><Link to="/profile">Profile</Link></li>
  //       <li><Link to="/" onClick={logout}>Logout {localStorage.getItem("username")}</Link></li>
  //       <li><Link to="/login">Login</Link></li>
  //   <li><Link to="/Signup">Signup</Link></li>
  // </>

  return (
    <div className="Nav">
      <Link to="/"><img src="./jobly-logo.png"/></Link>
      <ul>
       {listItems}
      </ul>
    </div>
  );
};

export default Nav;
