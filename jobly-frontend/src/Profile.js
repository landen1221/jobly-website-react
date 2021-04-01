import {useEffect, useState} from 'react'
import './CSS/Profile.css'
import { Button } from "reactstrap";
import JoblyApi from './API/JoblyApi';

const Profile = () => {
  const currentUser = localStorage.getItem('username')
  
  // FIXME: bring from state or local storage
  const INITIAL_STATE = {
    username: 'username',
    firstName: 'firstName',
    lastName: "lastName",
    email: "email",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [username, setUsername] = useState(currentUser)

  useEffect(() =>{
    async function getUserDetails() {
      const user = await JoblyApi.getUserDetails(currentUser)
      setFormData(user)
    }
    getUserDetails();
  }, [username])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function editUserDetails() {
      const updatedUser = await JoblyApi.editUserDetails(username, formData)
      setFormData(updatedUser)
    }

    editUserDetails()
    setUsername(currentUser)
    
  };

  return (
    <>
    <h3>Edit Profile:</h3>
    <div className="Form Profile">
      <h5>Username: <span className="notBold">{formData.username}</span> </h5>
      <form>
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
      <Button color="primary mt-2" type="submit" onClick={handleSubmit}>Submit</Button>
    </div>
    </>
  );
  };
  
  export default Profile;
  