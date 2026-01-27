import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div class="flex min-h-full flex-col  px-6 py-12">
        <button
          className="flex items-center justify-start h-10 "
          onClick={() => navigate("/")}
        >
          <h3 className="bg-orange-500 py-2 px-3 text-white  rounded-md">
            Back
          </h3>
        </button>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight">
            Create you account
          </h2>
        </div>

        <div class="mt-10">
          <form action="#" method="POST" class="space-y-2">
            <div>
              <label for="username" class="block text-sm/6 font-medium">
                Phone Number
              </label>
              <div class="mt-2">
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  required
                  autocomplete="phone"
                  class="block w-full rounded-md border border-orange-400  px-3 py-1.5 text-black focus:outline-none focus:border-2 focus:border-orange-500  placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <label for="username" class="block text-sm/6 font-medium">
                Username
              </label>
              <div class="mt-2">
                <input
                  id="username"
                  type="text"
                  name="username"
                  required
                  autocomplete="username"
                  class="block w-full rounded-md border border-orange-400  px-3 py-1.5 text-black focus:outline-none focus:border-2 focus:border-orange-500  placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm/6 font-medium">
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  class="block w-full rounded-md border border-orange-400  px-3 py-1.5 text-black focus:outline-none focus:border-2 focus:border-orange-500 placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium">
                  Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autocomplete="current-password"
                  class="block w-full rounded-md border border-orange-400  px-3 py-1.5 text-black focus:outline-none focus:border-2 focus:border-orange-500  placeholder:text-gray-500"
                />
              </div>
            </div>
          </form>
          <div className="mt-5 grid grid-cols-1 gap-2">
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign Up
            </button>

            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-orange-500"
              onClick={() => navigate("/signin")}
            >
              Already have account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
