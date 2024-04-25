import { useState } from 'react'


function Login() {  

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm mt-24">
        <img class="mx-auto h-20 w-auto" src="./Image/logo.jpg" alt="Your Company"/>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
          <div class="flex justify-center">
          <div id="google-signin-button" class="inline-flex items-center px-4 py-2  text-black font-semibold rounded-md shadow-md cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-6 h-6 mr-2">
                <path fill="#FFC107" d="M46.03 24.06c0-1.59-.14-3.13-.36-4.64H24v8.79h12.75a10.4 10.4 0 0 1-4.53 6.84v5.68h7.31c4.28-3.95 6.72-9.77 6.72-16.67z"/>
                <path fill="#FF3D00" d="M24 47.45c6.1 0 11.3-2.01 15.01-5.47l-7.32-5.68c-2.04 1.38-4.66 2.19-7.69 2.19-5.9 0-10.9-3.95-12.68-9.3H3.22v5.8A23.98 23.98 0 0 0 24 47.45z"/>
                <path fill="#4CAF50" d="M11.32 28.51c-.17-.55-.32-1.1-.45-1.67H3.22v5.98A23.96 23.96 0 0 0 0 24c0-3.9 1.47-7.47 3.88-10.22l7.44 5.75z"/>
                <path fill="#1976D2" d="M24 10.55c2.17 0 4.16.76 5.72 2.26l8.54-8.54C35.3 1.59 30.1 0 24 0 13.8 0 5.22 8.58 5.22 18.78l7.44-5.75C13.1 5.26 18.1 2.31 24 2.31z"/>
            </svg>
             Google
          </div>
        </div>

        </form>
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register now</a>
        </p>
      </div>
    </div>
  )
}

export default Login
