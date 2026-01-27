import { useNavigate } from "react-router-dom";


export default function SignIn() {
  const navigate = useNavigate()

  return (
    <>
      <div class="flex min-h-full flex-col  px-6 py-12">
        <button className="flex items-center justify-start h-10 ">
          <h3 className="bg-orange-500 py-2 px-3 text-white  rounded-md"
          onClick={() => navigate("/")}>Back</h3>
        </button>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10">
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  class="block w-full rounded-md border-2 border-orange-400  px-3 py-1.5 text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-semibold text-orange-400 hover:text-orange-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autocomplete="current-password"
                  class="block w-full rounded-md  border-2 focus:border-orange-400  bg-gray-200 px-3 py-1.5 text-base text-black"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
