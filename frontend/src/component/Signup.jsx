import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <>
             <div className='flex h-screen items-center justify-center bg-slate-100'>
        <div  className=" w-[600px] ">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login!</h3>

          <div className="mt-2 space-y-1">
            <label htmlFor="Name">Name</label>
            <br />
            <input
              type="text"
              id="text"
              placeholder="Enter Your Full Name"
              className="w-80 px-3 border rounded-md py-1 outline-none"
            />
          </div>
          <div className="mt-4  space-y-1">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
          </div>

          <div className="mt-2 space-y-1">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 border rounded-md py-1 outline-none"
            />
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SignUp</button>

          
       
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
        </div>
      </div>
      
      </div>
    </>

  )
}

export default Signup
