import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="bg-slate-300 w-screen h-screen flexer">
      <form className="border-2 bg-slate-300 w-[30%] p-6 flex flex-col items-start gap-4 rounded-xl border-slate-400">
        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="username" className="text-sm font-medium text-slate-700">
            Username
          </label>
          <input
            type="name"
            id="name"
            placeholder="kebo"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-400 active:border-blue-500"
          />
        </div>
        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="password" className="text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="******"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-500 active:border-blue-500"
          />
        </div>
        <input
          type="button"
          value="Sign in"
          className="px-8 p-2 bg-blue-700 text-slate-300 outline-none text-sm font-semibold rounded-md"
        />
        <div className="w-full flex items-center justify-between mt-8 border border-slate-300 rounded-md p-2 px-4 bg-slate-400/20">
          <Link
            to="/forgot"
            className="text-xs py-1 font-medium text-slate-700"
          >
            Forgot Password
          </Link>
          <div className="flex items-center text-xs py-1 gap-2 text-slate-700">
            <p>If you have no account </p>
            <Link to="/signup" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;