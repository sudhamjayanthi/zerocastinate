import Signup from "./Signup";
import "./styles.css";

export default function Home() {
  return (
    <div className="Home">
      <main>
        <h1>Never forget your todos again</h1>
        <p>Save all your todos at a single place</p>
        <Signup user={false} />
      </main>
        <footer>
      <p>Made with ❤ by <a href="https://twitter.com/sudhamjayanthi">Sudham Jayanthi</a></p>
        </footer>
    </div>
  );
}
