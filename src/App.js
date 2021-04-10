import "./styles.css";
import Todos from "./Todos";
import Home from "./Home";
import Header from "./Header";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Header user={user}/>
      {user ? <Todos /> : <Home />}
    </div>
  );
}
