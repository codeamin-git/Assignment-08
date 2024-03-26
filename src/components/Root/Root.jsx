import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;