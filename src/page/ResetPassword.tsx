const ResetPassword = () => {
  return (
    <div className="bg-slate-300 w-screen h-screen flexer">
      <form className="border-2 bg-slate-300 w-[30%] p-6 flex flex-col items-start gap-4 rounded-xl border-slate-400">
        
        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="password" className="text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="****"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-400 active:border-blue-500"
          />
        </div>

        <div className="w-full flex flex-col gap-2 group">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
            Confirm Password
          </label>
          <input
            type="confirmPassword"
            id="confirmPassword"
            placeholder="****"
            className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-400 active:border-blue-500"
          />
        </div>

        <input
          type="button"
          value="Reset Password"
          className="px-8 p-2 bg-blue-700 text-slate-300 outline-none text-sm font-semibold rounded-md"
        />
      </form>
    </div>
  );
};

export default ResetPassword;