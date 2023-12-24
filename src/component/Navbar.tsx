import ThemeSwitcher from "../Helpers/ThemeSwitcher";

const Navbar = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className=" w-screen p-2 flex flex-row justify-between">
          <div className="">
            <ThemeSwitcher />
          </div>
          <div className="w-[160px] flex flex-row items-center ">
            <div className="text-black dark:text-white text-2xl w-[160px] cursor-pointer">
              Sign up
            </div>
            <div className="text-black dark:text-white text-2xl w-[160px] cursor-pointer">
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
