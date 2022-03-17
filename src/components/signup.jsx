// import { LockClosedIcon } from '@heroicons/react/solid'
import React from "react";
import Logo from "../assets/Logo.svg"

export default function Login() {
  return (
    <>
      <div className="  h-16">
        
        <div className="text-right mt-16">
          <p className=" inline hover:scale-110">
            Already an User?
            <a
              href=""
              className="font-medium pl-2 pr-20 bg-clip-text text-transparent bg-gradient-to-r from-buttonGradientLeft to-buttonGradientRight"
            >
              Login
            </a>
          </p>
        </div>
      </div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-5">
          {/* <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            /> */}
          <h2 className="pb-1 text-center text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-buttonGradientLeft to-buttonGradientRight">
            Signup
          </h2>
          <p className="font-normal text-black -pt-10 hover:text-buttonGradientRight text-center">
            Get Started
          </p>
          {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p> */}

          <form className="mt-8 space-y-6" action="#" method="">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="name"
                  type="username"
                  required
                  className="appearance-none rounded-lg mb-5 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 focus:bg-gray-300 sm:text-sm"
                  placeholder="First + Last name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-lg mb-5 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 focus:bg-gray-300 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="grid grid-flow-col gap-4">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg mb-5 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 focus:bg-gray-300 sm:text-sm"
                  placeholder="password"
                />
              </div>
              <div>
                <label htmlFor="University" className="sr-only">
                  University
                </label>
                <input
                  id="university"
                  name="text"
                  type="text"
                  required
                  className="appearance-none rounded-lg mb-5 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 focus:bg-gray-300 sm:text-sm"
                  placeholder="University"
                />
              </div>


              </div>
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-buttonGradientLeft to-buttonGradientRight hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
