import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import DashboardNav from "../Pages/Dashboard/dashboardNav/DashboardNav";



const DashboardLayout = () => {
    return (
        <div className='relative min-h-screen md:flex'>
      {/* Left Side: Sidebar Component */}
      <Sidebar />
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1  md:ml-[245px]'>
        <DashboardNav></DashboardNav>
        <div className='bg-gray-100 min-h-[calc(100vh-60px)] mt-[60px] md:mt-0 '>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
    </div>
    );
};

export default DashboardLayout;