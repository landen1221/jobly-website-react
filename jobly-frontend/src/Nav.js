import { useState } from 'react';
import {Link} from 'react-router-dom'
import './CSS/Nav.css'

const Nav = () => {
  const [token, setToken] = useState("")
  let listItems = ""


  if (token) {
    listItems = 
    <>
    <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/companies/bauer-gallagher">Company/bg</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="logout">Logout</Link></li>
    </>
    
  } else {
    listItems = <>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/Signup">Signup</Link></li>
    </>
  }

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
