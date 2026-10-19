import { Link, NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { signedIn, signOut } = useAuth();

  return (
    <header className="site-header">
      <Link to="/" className="logo">
        Aiya's Blog
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {signedIn ? (
          <>
            <NavLink to="/protected">Protected</NavLink>
            <button type="button" className="btn btn-secondary" onClick={signOut}>
              Sign out
            </button>
          </>
        ) : (
          <NavLink to="/signin">Sign in</NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;