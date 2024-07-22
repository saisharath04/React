import React, { useState } from "react";
import LoginDetails from "./userContext";

const UserContextProvider = ({ children }) => {
  const state = {
    userName: "",
    password: "",
  };

  const [user, setUser] = useState(state);

  return (
    <>
      <LoginDetails.Provider value={{ user, setUser }}>
        {children}
      </LoginDetails.Provider>
    </>
  );
};

export default UserContextProvider;
