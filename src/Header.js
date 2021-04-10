import "./styles.css";
import Signup from "./Signup.js";

export default function Header({ user }) {
  return (
    <div className="Header">
      <nav>
        <h3>ZeroCastinate</h3>
       <Signup user={user} />
      </nav>
    </div>
  );
}
