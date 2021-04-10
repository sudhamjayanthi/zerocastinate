import "./styles.css";
import { auth } from "./firebase";
import firebase from "firebase";

export default function Signup({ user }) {
  const sighInWithGoogle = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
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
