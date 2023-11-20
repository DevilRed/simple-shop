import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-2">
        <div className="col-md-4 text-center">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
