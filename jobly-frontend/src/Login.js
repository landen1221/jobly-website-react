import { useState } from "react";
import './CSS/Login.css'

const Login = () => {
  const INITIAL_STATE = {
    username: "",
    password: "",
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
    <h3>Login:</h3>
    <div className="Form">
      
      {/* <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            value={formData.username}
            id="username"
            name="username"
            onChange={handleChange}
          />
          <Label for="password">Password:</Label>
          <Input
            type="password"
            value={formData.password}
            id="password"
            name="password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form> */}

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
        <button>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Login;
