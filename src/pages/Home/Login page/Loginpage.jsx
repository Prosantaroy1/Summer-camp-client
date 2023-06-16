import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Loginpage = () => {
    //
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    //
    const {signIn} =useContext(AuthContext);
    
    const onSubmit = (data) => {
       signIn(data.email, data.password)
        .then(result=>{
           const user = result.user;
           console.log(user)
        })
        .catch(error=>{
           console.log(error);
        })
    };
  return (
      <div className="pt-24">
        <form  onSubmit={handleSubmit(onSubmit)} className="hero  mx-auto">
          <div className="hero-content">
            <div className="card w-[400px] shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                  <span className="text-red-600">This field is email!</span>
                )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    {...register("password", { required: true })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                    {errors.password && (
                  <span className="text-red-600">This field is password!</span>
                )}
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
