import {Link} from 'react-router-dom'
import './CSS/Nav.css'

const Nav = () => {
  return (
    <div className="Nav">
      <img src="./jobly-logo.png"/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/companies/bauer-gallagher">Company/bg</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/Signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Nav;
