import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.confiq';
export const AuthContext=createContext()
const auth=getAuth(app)
const Authprovider = ({children}) => {
    const [loading,setLodaing]=useState(true)
    const creatUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
  }
  const signin=(email,password)=>{
    setLodaing(false)
    return signInWithEmailAndPassword(auth,email,password)
}

    const infodata={
        creatUser,
        signin,
        loading

    }
    return (
        <div>
            <AuthContext.Provider value={infodata}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;