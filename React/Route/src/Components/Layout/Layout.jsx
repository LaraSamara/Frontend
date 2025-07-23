import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return <div className="layout min-vh-100 d-flex justify-content-center align-items-center flex-column">
        <Navbar />
        <Outlet />
        <Footer />
    </div>;
};

export default Layout;
