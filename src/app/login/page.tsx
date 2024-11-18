'use client'

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function Login() {

  return (
    <section className="bg-white">
      <div className='flex justify-center items-center my-2'>
        <div className="max-w-xl lg:max-w-xl m-5">
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
            Welcome to FinTasker
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500 text-center">
            The authentication form in FinTasker enables users to securely register or log in, providing easy access to their financial and task management features.
          </p>
          <form>
            <div className='flex flex-col mt-6'>
              <div className='mb-6'>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                <Input
                  id="email"
                  type="text"
                  placeholder="email"
                /> 
              </div>
              <div className='mb-6'>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Password </label>

                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                />
              </div>
              <div className='mb-6'>
                <Button type='submit' className='w-full bg-blue-500'>Sign In</Button>
              </div>
              <div className='mb-6'>
                <p className="text-sm text-gray-500 sm:mt-0 text-center">
                  You dont have an account?
                  <Link href={'/register'} className="text-blue-600"> Register.</Link>
                </p>
              </div>
              <span className="relative flex justify-center mb-6">
                <div
                  className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                ></div>

                <span className="relative z-10 bg-white px-6 text-xs text-gray-500">OR</span>
              </span>
              <div className='mb-6'>
                <Button className="w-full bg-white px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow hover:bg-neutral-200 transition duration-150">
                  <Image className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" width={10} height={10} />
                  <span>Login with Google</span>
              </Button>
              </div>
            </div>
          </form>
        </div>
       
      </div>
    </section>
  );
}
