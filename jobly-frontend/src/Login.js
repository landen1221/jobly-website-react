import { useState } from "react";
import './CSS/Login.css'
import JoblyApi from "./API/JoblyApi";
import {useHistory} from 'react-router-dom'
import { Button } from "reactstrap";


const Login = () => {
  const history = useHistory();
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [token, setToken] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function loginUser(){
      const token = await JoblyApi.loginUser(formData)
      setToken(token)
    }
    loginUser()

    // Promise.all([loginUser]).then(() => {
    //   if (token) {
    //     history.push('/companies')
    //   } else {
    //     alert('invalide login info')
    //   }
    // })



    if (token) {
      history.push('/companies')
    } else {
      alert('invalide login info')
    }

  };

  return (
    <>
    <h3>Login:</h3>
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          id="username"
          name="username"
          onChange={handleChange}
        /> <br/>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleChange}
        /> <br/>
        <Button color="primary mt-2">Submit</Button>
      </form>
    </div>
    </>
  );
};

export default Login;
