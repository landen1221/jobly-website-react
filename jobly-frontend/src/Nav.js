import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <ul className='Nav'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/companies">Companies</Link></li>
      <li><Link to="/companies/bauer-gallagher">Company/bg</Link></li>
      <li><Link to="/jobs">Jobs</Link></li>
      <li><Link to="/jobs/55">jobs/55</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/Signup">Signup</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </ul>
  );
};

export default Nav;
