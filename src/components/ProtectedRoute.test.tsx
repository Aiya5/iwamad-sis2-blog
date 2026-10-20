import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import SignInPage from "../pages/SignInPage";
import ProtectedPage from "../pages/ProtectedPage";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/protected" element={<ProtectedPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </MemoryRouter>
  );
}

describe("ProtectedRoute", () => {
  it("redirects to sign in page when not signed in", () => {
    renderAt("/protected");
    expect(screen.getByRole("heading", { name: /sign in/i })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /protected page/i })
    ).not.toBeInTheDocument();
  });

  it("shows protected content after signing in", async () => {
    const user = userEvent.setup();
    renderAt("/signin");

    await user.click(screen.getByRole("button", { name: /sign in/i }));

    expect(
      screen.getByRole("heading", { name: /protected page/i })
    ).toBeInTheDocument();
  });
});