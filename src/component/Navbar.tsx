import ThemeSwitcher from "../Helpers/ThemeSwitcher";

const Navbar = () => {
  return (
    <>
      {" "}
      <div className="bg-white dark:bg-gray-900">
        <div className=" w-screen p-2 flex flex-row justify-between">
          <div className="">
            <ThemeSwitcher />
          </div>
          <div className="text-black dark:text-white">Login</div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
