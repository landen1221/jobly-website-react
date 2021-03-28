import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
