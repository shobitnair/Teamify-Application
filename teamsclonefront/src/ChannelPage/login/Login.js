import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

import "./login.css";

// google sign in method powered by firebase auth system
const Login = () => {
  
  const signin = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div >
      <h1 style={{fontSize: "40px" }}>Teams</h1>
      <Button onClick={signin}>Sign In</Button>
    </div>
  );
};

export default Login;
