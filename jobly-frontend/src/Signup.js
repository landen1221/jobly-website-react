import { useState } from "react";
import JoblyApi from "./API/JoblyApi";
import './CSS/Signup.css'

const Signup = () => {
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
        
    const jsonFormData = JSON.stringify(formData)
    console.log(jsonFormData)

    async function registerUser(){
      const token = await JoblyApi.registerUser(jsonFormData)
      setToken(token)
    }
    registerUser()

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
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Signup;
