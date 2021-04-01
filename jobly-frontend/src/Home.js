import { Link } from 'react-router-dom'
import './CSS/Home.css'
console.log(localStorage.getItem('token'))
const Home = () => {
    return (
      <div className="Home">
        <h6>Token: {localStorage.getItem('token')}</h6>
        <h1>Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        <Link to="/login"> <button>Log In</button></Link>
        <Link to="/signup"><button>Sign up</button></Link>
      </div>
    );
  };
  
  export default Home;
  