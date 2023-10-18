import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUsere] = useState(null);
    const [loading, setULoading] = useState(true);

    const authInfo = {
        user,
        loading,
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;