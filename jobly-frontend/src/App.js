import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";
import UserContext from "./context/UserContext";
import {useState} from 'react'

function App() {
  const testUser = { username: "frank" };
  const [user, setUser] = useState(testUser);
  const [token, setToken] = useState(testUser);

  return (
    <div className="App">
      <UserContext.Provider value={user, token, setToken}>
        <BrowserRouter>
          <Nav />
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
