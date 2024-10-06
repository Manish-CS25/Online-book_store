import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:3001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("signup successfully");
        }
      }).catch((error) => {
        if(error.response){
          alert("Error:  " + error.response.data.message);
        }
      }
      );
  };



  return (
    <>
      <div className='flex h-screen items-center justify-center bg-slate-100'>
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp!</h3>

              <div className="mt-2 space-y-1">
                <label htmlFor="fullname">full name</label>
                <br />
                <input
                  type="text"
                  id="text"
                  placeholder="Enter Your Full Name"
                  className="w-80 px-3 border rounded-md py-1 outline-none"
                  {...register("fullname", { required: "Full Name is required" })}
                />
                {errors.fullname && (
                  <p role="alert" className="text-sm text-red-500">
                    {errors.fullname.message}
                  </p>
                )}
              </div>
              <div className="mt-4  space-y-1">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (<p role="alert" className="text-sm text-red-500">{errors.email.message}</p>)}

              </div>

              <div className="mt-2 space-y-1">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 border rounded-md py-1 outline-none"
                  {...register("password", { required: true })}

                />
                {errors.password && (
                  <p role="alert" className="text-sm text-red-500">
                    This field is required
                  </p>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button type="submit" className="bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SignUp</button>





                <p className='text-xl'>Already have an account? <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                  <Login /></p>
              </div>
            </form>
          </div>
        </div>
      </div>





    </>

  )
}

export default Signup
