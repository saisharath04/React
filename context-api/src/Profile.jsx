import React, { useContext } from "react";
import LoginDetails from "./context/userContext";

const Profile = () => {
  const { user } = useContext(LoginDetails);
  return (
    <>
      {user?.userName === "" ? <>No data found</> : <>{user.userName}</>}
    </>
  );
};

export default Profile;
