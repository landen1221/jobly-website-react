import { useState } from "react";

const Signup = () => {
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
    <div>
      <h1>Login Form2</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={formData.username}
          id="username"
          name="username"
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleChange}
        />
        <label>First Name:</label>
        <input
          type="text"
          value={formData.firstName}
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />
        <label>Last Name:</label>
        <input
          type="text"
          value={formData.lastName}
          id="lastName"
          name="lastName"
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="text"
          value={formData.email}
          id="email"
          name="email"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Signup;
