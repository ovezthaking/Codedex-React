import Link from 'react-router-dom';
import "../styles.css";

export default function NavBar() {
  return <nav className="navbar">
    <Link to='/'>Home</Link>
  </nav>;
}
