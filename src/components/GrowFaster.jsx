import { Trophy, Flower2, SunMedium, ArrowRight } from "lucide-react";

export default function GrowFaster() {
  return (
    <section className="py-20 bg-[#f5f7ff] px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black">
          We help your business grow faster.
        </h2>

        <p className="text-gray-600 mt-4">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-white p-10 rounded-3xl shadow-sm">
          <Trophy className="w-10 h-10 text-[#6b4dfc]" />

          <h3 className="mt-6 text-xl font-extrabold text-black">
            Offending belonging
          </h3>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>

          <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold cursor-pointer">
            Read More <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-10 rounded-3xl shadow-sm">
          <Flower2 className="w-10 h-10 text-[#6b4dfc]" />

          <h3 className="mt-6 text-xl font-extrabold text-black">
            Promotion & provision
          </h3>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address.
          </p>

          <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold cursor-pointer">
            Read More <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-10 rounded-3xl shadow-sm">
          <SunMedium className="w-10 h-10 text-[#6b4dfc]" />

          <h3 className="mt-6 text-xl font-extrabold text-black">
            Blessing application
          </h3>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Ham windows sixteen who inquiry fortune demands. Is be upon sang
            fond must shew. Really boy law county she unable her sister.
          </p>

          <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold cursor-pointer">
            Read More <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-16">
        <button className="bg-[#6456f2] hover:bg-[#5548e6] text-white px-10 py-4 rounded-xl font-semibold shadow-md">
          More About Platform
        </button>
      </div>
    </section>
  );
}
