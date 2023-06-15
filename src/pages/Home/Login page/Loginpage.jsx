import React from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
    //
    const handlelogin = event =>{
        console.log(event)
    }
  return (
      <div className="pt-24">
        <form onSubmit={handlelogin} className="hero  mx-auto">
          <div className="hero-content">
            <div className="card w-[400px] shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <label className="label">
                    <p className="font-semibold">Created New Account ?</p>
                    <span className="font-bold"> <Link to='/register'>Register now</Link> </span>
                </label>
                <div className="divider mb-0">OR</div>
              </div>
              <div className="form-control px-7 mb-3">
                  <button className="btn btn-secondary">Google</button>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Loginpage;
