import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/home">User Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservations">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/history">Payment History</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mycart">My Cart</NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/class"> Classes</NavLink>
            </li>
            <li>
              <NavLink to="/instructor">Instructor</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

