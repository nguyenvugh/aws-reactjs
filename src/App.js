import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      My Name {process.env.REACT_APP_VAR_NAME || "noname"}
    </div>
  );
}

export default App;
