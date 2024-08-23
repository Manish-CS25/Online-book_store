import React from "react";

function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login!</h3>
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
          <div className="mt-4 space-y-1">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-80 px-3 border rounded-md py-1 outline-none"
            />
          </div>
          <div className="mt-4">
            <button className="btn btn-primary">Login</button>

          </div>
          <div className="mt-4">
            <a href="/register">Don't have an account? Sign Up</a>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
