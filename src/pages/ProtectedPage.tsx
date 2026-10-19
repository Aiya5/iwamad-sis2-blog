import { useAuth } from "../context/AuthContext";

function ProtectedPage() {
  const { signedIn } = useAuth();

  return (
    <section>
      <h1>Protected page</h1>
      <p>Welcome, signed-in reader. You are {signedIn ? "in" : "not signed in"}.</p>
      <p>This page is only visible to signed-in users.</p>
    </section>
  );
}

export default ProtectedPage;