import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/banner/logo_footer.png";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Result } from "postcss";

const NavBar = () => {
  ///
  const { user, logOut } = useContext(AuthContext);
  //
  const handleLogout = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ///navitem list
  const navItems = (
    <div className="font-bold gap-4 flex text-xl">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/class">Class</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </div>
  );
  return (
    <div>
      <div className="navbar   fixed z-50 max-w-screen-xl  mx-auto bg-opacity-70 text-[#f3f3f3] bg-[#7d7e7d]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <figure>
            <img src={logo} alt="" />
          </figure>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className=" me-5">
              <img
                src={user?.photoURL}
                className="rounded-full"
                style={{ width: "42px", height: "42px" }}
              />
            </div>
          )}
          {user ? (
            <>
              <Link to="/">
                <button onClick={handleLogout} className="btn btn-primary">
                  LogOut
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
