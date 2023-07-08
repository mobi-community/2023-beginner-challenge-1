import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "components/Nav";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
