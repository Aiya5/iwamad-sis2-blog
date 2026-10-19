import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© 2026 Aiya Gabdulkyzy</p>
      </footer>
    </>
  );
}

export default Layout;