import { useState } from "react";
import JoblyApi from "./API/JoblyApi";
import './CSS/Signup.css'
import {useHistory} from 'react-router-dom'
import { Button } from "reactstrap";

const Signup = () => {
  const history = useHistory();
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [token, setToken] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function registerUser(){
      const token = await JoblyApi.registerUser(formData)
      setToken(token)
    }
    registerUser()
    history.push('/jobs')

  };

  return (
    <>
      <h3>Signup:</h3>
      <div className="Form Signup">
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={formData.username}
            id="username"
            name="username"
            onChange={handleChange}
          />{" "}
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            id="password"
            name="password"
            onChange={handleChange}
          />{" "}
          <br />
          <label>First Name:</label>
          <input
            type="text"
            value={formData.firstName}
            id="firstName"
            name="firstName"
            onChange={handleChange}
          />{" "}
          <br />
          <label>Last Name:</label>
          <input
            type="text"
            value={formData.lastName}
            id="lastName"
            name="lastName"
            onChange={handleChange}
          />{" "}
          <br />
          <label>Email:</label>
          <input
            type="text"
            value={formData.email}
            id="email"
            name="email"
            onChange={handleChange}
          />{" "}
          <br />
        </form>
        <Button type="submit" color="primary mt-2" onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default Signup;
