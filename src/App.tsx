import "./App.css";
import LoginForm from "./component/LoginForm";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen justify-center items-center dark:bg-gray-900 content-center">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
