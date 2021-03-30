import {useState} from 'react'
import './CSS/Profile.css'

const Profile = () => {
  
  // FIXME: bring from state or local storage
  const INITIAL_STATE = {
    username: 'testing',
    password: 'password',
    firstName: 'firstName',
    lastName: "lastName",
    email: "email",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <h3>Edit Profile:</h3>
    <div className="Form Profile">
      <h5>Username: <span className="notBold">{formData.username}</span> </h5>
      <form onSubmit={handleSubmit}>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleChange}
        /><br/>
        <label>First Name:</label>
        <input
          type="text"
          value={formData.firstName}
          id="firstName"
          name="firstName"
          onChange={handleChange}
        /><br/>
        <label>Last Name:</label>
        <input
          type="text"
          value={formData.lastName}
          id="lastName"
          name="lastName"
          onChange={handleChange}
        /><br/>
        <label>Email:</label>
        <input
          type="text"
          value={formData.email}
          id="email"
          name="email"
          onChange={handleChange}
        /><br/>
      </form>
      <button>Submit</button>
    </div>
    </>
  );
  };
  
  export default Profile;
  