import "./styles.css";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import ExercisesList from "./components/exercises/exercises-list.js";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function App() {
  return (
    <div className="App">
      <h1>Wing Chun Workout Tracker</h1>
      <h2>Welcome to our Home Page!</h2>
      <nav className="Navbar">
        <Link href="#" className="Link">
          Link
        </Link>
        <Link href="#" className="Link">
          Link
        </Link>
        <Link href="#" className="Link">
          Link
        </Link>
        <Link href="#" className="Link">
          Link
        </Link>
      </nav>

      {/* <Register /> */}
      {/* <Login /> */}
      <ExercisesList />
    </div>
  );
}
