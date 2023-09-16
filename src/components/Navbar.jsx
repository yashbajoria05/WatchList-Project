import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 md:py-5 md:px-8 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-violet-600 text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer">
          WATCHLIST
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-3 md:pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-violet-600 px-3 py-1 md:px-6 md:py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-3 md:pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-violet-600 px-3 py-1 md:px-6 md:py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
