import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import UserContext from "./context/UserContext";
import {useState} from 'react'
import JoblyApi from "./API/JoblyApi";

function App() {
  const [token, setToken] = useState(null)

  const login = (userToken, username) => {
    localStorage.setItem('token', userToken)
    JoblyApi.token = userToken
    localStorage.setItem('username', username)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    JoblyApi.token = ""
    localStorage.removeItem('username')
  }

  return (
    <div className="App">
      <UserContext.Provider value={{login, logout, token, setToken}}>
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
