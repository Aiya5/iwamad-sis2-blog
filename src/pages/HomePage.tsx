import { Link } from "react-router";

function HomePage() {
  return (
    <section>
      <h1>Welcome to Aiya's Blog</h1>
      <p>
        A small blog where I write about what I'm learning: React, TypeScript,
        CSS, and the things I break along the way.
      </p>
      <Link to="/posts">Read posts →</Link>
    </section>
  );
}

export default HomePage;