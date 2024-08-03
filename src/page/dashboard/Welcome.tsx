import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Welcome() {
  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex flex-col justify-start items-start">
      <Navbar />
      <div className="w-full flexer">
        <div className="-py-1 w-[65%]">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Welcome;
