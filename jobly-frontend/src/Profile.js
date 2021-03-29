import {useState} from 'react'

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
    <div>
      <h1>Profile</h1>
      <h5>Username: <span className="notBold">{formData.username}</span> </h5>
      <form onSubmit={handleSubmit}>
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
  
  export default Profile;
  