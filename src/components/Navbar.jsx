import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="flex justify-between items-center md:px-20 px-5 py-4 absolute top-0 left-0 right-0 z-50">
      <h1 className="text-xl font-bold">SaaS Launch</h1>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>
          <a href="#testimonials" className="hover:text-indigo-600">
            Testimonials
          </a>
          <a href="#pricing" className="hover:text-indigo-600">
            Pricing
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-3 py-1 border-none rounded-lg text-sm">
          Sign In
        </button>

        <button className="px-6 py-3 bg-[#5D5FEF] text-white rounded-lg text-sm">
          Start Free
        </button>

        {/* Dark/Light Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg border"
        >
          {dark ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
}
