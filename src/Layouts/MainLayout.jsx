import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";



const MainLayout = () => {
    return (
        <div>
            <div className="mb-[82px]"><Navbar></Navbar></div>
            <div className="min-h-[calc(100vh-355px)]">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;