import { CheckIcon } from "@heroicons/react/24/solid";
export default function Hero() {
  return (
    <section className="lg:px-20 px-5 py-20 hero-container hero-banner md:flex md:flex-row flex flex-col items-center justify-between min-h-[100vh]">
      {/* LEFT CONTENT */}
      <div className="text-start max-w-2xl lg:max-w-xl">
        <p className="text-lg font-semibold">
          Product Growth Solution in Single Platform.
        </p>

        <h1 className="text-4xl lg:text-5xl font-bold md:font-extrabold mb-4 leading-tight">
          Managing business payments has never been easier
        </h1>

        <p className="text-gray-600 dark:text-[#757095] text-lg mb-6">
          Never at water me might. On formed merits hunted unable merely by mr
          whence or. Possession the unpleasing simplicity her uncommonly.
        </p>

        <div className="card flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white shadow-lg rounded-lg">
          <div className="w-full sm:w-auto">
            <span className="text-sm font-bold opacity-40 block">
              Register using email address
            </span>
            <div className="text-md font-bold opacity-60">
              gokulanathjp@gmail.com
            </div>
          </div>

          <button className="px-6 py-3 bg-[#1B1C31] text-white text-md w-full sm:w-40 rounded-md">
            Submit
          </button>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#5D5FEF] p-0.5 rounded-full flex items-center justify-center">
              <CheckIcon className="h-3 w-3 text-white" />
            </span>
            <p className="text-sm text-[#757095]">Free Register</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#5D5FEF] p-0.5 rounded-full flex items-center justify-center">
              <CheckIcon className="h-3 w-3 text-white" />
            </span>
            <p className="text-sm text-[#757095]">Great Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
