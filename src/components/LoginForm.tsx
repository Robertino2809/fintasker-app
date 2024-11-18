"use client";

import Link from "next/link";


export default function LoginForm() {

  return(
  
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to FinTasker
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              The authentication form in FinTasker enables users to securely register or log in, providing easy access to their financial and task management features.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="border-neutral-100 border w-full rounded-md shadow-md mt-1 text-sm h-8 p-2 text-neutral-600"
                />
              </div>
              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
  
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="border-neutral-100 border w-full rounded-md shadow-md mt-1 text-sm h-8 p-2 text-neutral-600"
                />
              </div>


              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  You already have an account? 
                  <Link href={'/register'} className="text-blue-600"> Register.</Link>
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
    )
};
