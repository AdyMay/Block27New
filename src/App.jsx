
import { useState } from React;
import SignUpForm from "./SignUpForm/SignUpForm";
import Authenticate from "./Authenticate/Authenticate";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      { token }
      <Authenticate token={ token } />
      <SignUpForm setToken={ setToken } />
    </>
  );
}

export default App;

