import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";

function SignInPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSignIn() {
    signIn();
    navigate("/protected");
  }

  return (
    <section>
      <h1>Sign in</h1>
      <p>Click below to sign in as a reader.</p>
      <Button type="button" onClick={handleSignIn}>
        Sign in
      </Button>
    </section>
  );
}

export default SignInPage;