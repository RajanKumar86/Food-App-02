import { useState } from "react";
import { Header_Logo } from "../../src/utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Log-In");
  const OnlineStatus = useOnlineStatus()

  return (
    <div className = "flex justify-between bg-pink-200 shadow-lg mx-3 my-2 pr-4 h-32">
      <div className= "w-48 m-2 ">
        <img className= "h-28" src={Header_Logo} alt="Logo Img"></img>
      </div>

      <div className="flex items-center">
        <ul className="flex  p-2 m-2">

        <li className="px-4"> Online Status : - {OnlineStatus ? "✅" : "🔴"}</li>

          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About </Link>
          </li>

          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>
          </li>

          <li className="px-4">Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === "Log-In"
                ? setbtnName("Log-Out")
                : setbtnName("Log-In");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
