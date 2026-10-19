import { Link } from "react-router";

function NotFoundPage() {
  return (
    <section>
      <h1>404 — Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">← Back to home</Link>
    </section>
  );
}

export default NotFoundPage;