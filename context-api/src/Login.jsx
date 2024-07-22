import { useContext, useState } from "react";
import LoginDetails from "./context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(LoginDetails);

  const clickHandler = () => {
    setUser({
      userName: userName,
      password: password,
    });
  };

  return (
    <>
      <input
        placeholder="User name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={clickHandler}>Save</button>
    </>
  );
}

export default Login;
