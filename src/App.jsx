import React, { useState } from "react";

import Authenticate from "./components/Authenticate/Authenticate";
import SignUpForm from "./components/SignUpForm/SignUpForm";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <h2>Token: {token}</h2>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
