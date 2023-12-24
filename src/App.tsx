import "./App.css";
import ThemeSwitcher from "./Helpers/ThemeSwitcher";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className=" w-screen flex flex-row content-between">
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}

export default App;
