import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  const [loadign, setLoading] = useState(true);
  //created user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  //signIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  //logOut
  const logOut = () => {
    return signOut(auth);
    setLoading(true);
  };
  //update profile
  const updateNamePhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  ///
  const authInfo = {
    user,
    loadign,
    createNewUser,
    signIn,
    logOut,
    updateNamePhoto,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
