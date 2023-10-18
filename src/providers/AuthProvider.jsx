import { createContext, useState } from "react";


export const AuthContext = createContext(null);


const AuthProvider = () => {
    const [user, setUsere] = useState(null);
    const [loading, setULoading] = useState(true);

    const authInfo = {
        user,
        loading,
    }
  return (
    <AuthContext.Provider value={authInfo}>AuthProvider</AuthContext.Provider>
  )
}

export default AuthProvider;