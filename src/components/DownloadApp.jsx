import { Play, Apple } from "lucide-react";

export default function DownloadApp() {
  return (
    <section
      className="py-10 lg:py-20 bg-contain bg-center bg-no-repeat min-h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('src/assets/images/whyChooseUsBackground.png')",
      }}
    >
      <div className="mx-auto text-center">
        {/* SMALL TITLE */}
        <p className="text-xs font-semibold tracking-widest text-[#6B72FF] mb-4">
          PROJECT MANAGEMENT APP
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
          Download our app and start your free <br className="hidden md:block" />
          trail to get started today!
        </h2>

        {/* SUB TEXT */}
        <p className="text-gray-500 mt-5 text-lg px-4">
          End-to-end payments and financial management in a single solution.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          {/* App Store Button */}
          <button className="flex items-center gap-2 bg-[#6B72FF] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition transition-transform duration-200 ease-out hover:scale-105">
            <Apple className="w-5 h-5" />
            Playstore
          </button>

          {/* Google Play Button */}
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition transition-transform duration-200 ease-out hover:scale-105">
            <Play className="w-5 h-5" />
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
