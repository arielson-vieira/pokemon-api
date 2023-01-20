import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [userPublic, setUserPublic] = useState(true);

  const [userConnect, setUserConnect] = useState();
  useEffect(() => {
    setUserConnect(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ userConnect, setUserConnect, userPublic, setUserPublic }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
