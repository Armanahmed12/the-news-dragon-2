import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    //  user state and loading state
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create a new user
    const createNewUser = (email, password) =>{

           return createUserWithEmailAndPassword(auth,email,password);
    }

    // log out a user
    const logOutAUser = () =>{

           signOut(auth).then(()=>{

           }).catch(error =>{

                console.log(error.message);
           })
    }

    // handle user logIn
    const  userLogIn  = (email, password) =>{

           return signInWithEmailAndPassword(auth, email, password);
    }
    // checking whether there is a user Or not.
    useEffect(()=>{

    const unsubscribe =  onAuthStateChanged(auth, (user)=>{

                setUser(user);
                setLoading(false);
          });
    
     return ()=>{

          unsubscribe();
     }

    },[]);
  
    const authInfo = {user, loading, logOutAUser, createNewUser,userLogIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;