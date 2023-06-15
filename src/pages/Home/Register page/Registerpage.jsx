import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthContext from "../../../Provider/AuthContext";

const Registerpage = () => {
  ///
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //fireabse register
  
  const { createUser} = useContext(AuthContext);

  const onSubmit = (data) => {
     console.log(data)
     createUser(data.email, data.password)
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
      <form onSubmit={handleSubmit(onSubmit)} className="hero  mx-auto">
        <div className="hero-content">
          <div className="card w-[400px] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                  {errors.name && (
                  <span className="text-red-600">This field is photoUrl!</span>
                )}
              </div>
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
                  <span className="text-red-600">This field is photoUrl!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo", { required: true })}
                  placeholder="photo"
                  className="input input-bordered"
                />
                  {errors.photo && (
                  <span className="text-red-600">This field is photoUrl!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password", { required: true,
                    maxLength: 20,
                    minLength: 6, })}
                  placeholder="password"
                  className="input input-bordered"
                />
                  {errors.password && (
                  <span className="text-red-600">This field is password!</span>
                )}
                  {errors.password?.type === "maxLength" && (
                  <p className="text-red-600" role="alert">
                    password is 20 char small required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600" role="alert">
                    password is 6 char required
                  </p>
                )}
              </div>
             {/*
               <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  {...register("confirm", { required: true })}
                  placeholder=" confirm password"
                  className="input input-bordered"
                />
                 {errors.confirm && (
                  <span className="text-red-600">This field is password!</span>
                )}
              </div>
              */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label">
                <p className="font-semibold">All ready account ?</p>
                <span className="font-bold">
                  {" "}
                  <Link to="/login">Login now</Link>{" "}
                </span>
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

export default Registerpage;
