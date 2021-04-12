import "./styles.css";
import { auth } from "./firebase";
import firebase from "firebase/app";

export default function Signup({ user }) {
  const sighInWithGoogle = () => {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then((r) => {
      alert("Successfully logged in!")
    });
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <button className="cta" onClick={user ? signOut : sighInWithGoogle}>
      {user ? "Sign out" : "Sign in"}
    </button>
  );
}
