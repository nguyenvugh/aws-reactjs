import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      My Name {process.env.REACT_APP_VAR_NAME || "noname2222"}
    </div>
  );
}

export default App;
