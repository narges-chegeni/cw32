import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Tabs from "./components/tabs/Tabs";
import "./output.css";

function App() {
  return (
    <div className="bg-black h-screen flex items-center justify-center ">
      <div className="w-1/2 text-white border-white border-2 p-4">
        <Tabs />
        <Login />
        {/* <Register /> */}
      </div>
    </div>
  );
}

export default App;
