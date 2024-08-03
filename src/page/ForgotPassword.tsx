import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="bg-slate-300 w-screen h-screen flexer">
      <form className="border-2 bg-slate-300 w-[30%] p-6 flex flex-col items-start gap-4 rounded-xl border-slate-400">
        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="mbonigabakevin@gmail.com"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-400 active:border-blue-500"
          />
        </div>
        <input
          type="button"
          value="Send Link"
          className="px-8 p-2 bg-blue-700 text-slate-300 outline-none text-sm font-semibold rounded-md"
        />
        <div className="w-full flex items-center justify-between mt-8 border border-slate-300 rounded-md p-2 px-4 bg-slate-400/20">
          <div className="flex items-center text-xs py-1 gap-2 text-slate-700">
            <Link to="/auth" className="text-blue-600 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;