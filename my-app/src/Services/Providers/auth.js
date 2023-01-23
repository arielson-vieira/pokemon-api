import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [userPublic, setUserPublic] = useState(true);

  const [userConnect, setUserConnect] = useState();

  const [userUnregistered, setUserUnregistered] = useState(true);
  const [userRegisterDone, setUserRegisterDone] = useState();

  const [time, setTime] = useState();

  return (
    <AuthContext.Provider
      value={{
        userConnect,
        setUserConnect,
        userPublic,
        setUserPublic,
        userRegisterDone,
        setUserRegisterDone,
        userUnregistered,
        setUserUnregistered,
        time,
        setTime,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
