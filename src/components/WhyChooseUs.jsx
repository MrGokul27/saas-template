export default function WhyChooseUs() {
  return (
    <section className="bg-[#0F0E2C] py-24">
      <div className="max-w-8xl mx-auto md:px-20 px-5 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm tracking-widest text-gray-300 mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl font-bold text-white leading-tight">
            Track your crypto <br />
            portfolio on the <br />
            best way possible
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Mean if the they been no hold mr. Is at much do made. Latter person
            am secure of estate genius at.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="space-y-5 md:w-[70%] w-full mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-4 px-5 bg-[#2C2C52] text-gray-200 rounded-md outline-none placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full py-4 px-5 bg-[#2C2C52] text-gray-200 rounded-md outline-none placeholder-gray-400"
          />

          <button className="w-full py-4 bg-[#605DFF] text-white font-semibold rounded-md hover:opacity-90">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
}
