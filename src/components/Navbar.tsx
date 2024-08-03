import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className="w-full bg-slate-800 p-4 px-24 text-slate-300 flex justify-between text-xs">
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
    );
  };
  
  export default Navbar;