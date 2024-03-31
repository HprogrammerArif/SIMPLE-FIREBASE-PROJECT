import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(result => {
      console.log(result);
      setUser(null)
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      {/* user? sign out: sign in */}
      {
        user? <button onClick={handleSignOut}>Sign out</button>:<button onClick={handleGoogleSignIn}>Google Login</button>
      }
      
      
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <h3>Email: {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
