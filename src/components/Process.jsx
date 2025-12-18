export default function Process() {
  return (
    <section className="relative lg:px-20 px-5 h-[100%] overflow-hidden">
      {/* RIGHT BACKGROUND CIRCLE */}
      <div className="absolute right-[-200px] top-[-50px] w-[500px] h-[500px] bg-[#E8ECFF] rounded-full opacity-50 hidden"></div>

      <div className="relative z-10">
        {/* LEFT CONTENT */}
        <div className="absolute max-w-md">
          <p className="text-sm font-semibold text-indigo-600 tracking-wider">
            STOCKIE OPERATION ACROSS THE WORLD
          </p>

          <h2 className="text-4xl font-bold leading-tight mt-3">
            We have best team <br /> and best process
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy.
          </p>

          <button className="mt-8 px-8 py-2 bg-indigo-500 text-white rounded-full font-medium shadow-md">
            Get Started
          </button>
        </div>

        {/* Process Count */}
        <div className="relative w-full max-w-6xl mx-auto pt-[300px] md:pt-[100px] lg:pt-0 mt-20 mb-20">
          {/* CURVED LINE — desktop only */}
          <svg
            viewBox="0 0 900 300"
            fill="none"
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[150%] max-w-none rotate-[-30deg] opacity-60 hidden xl:block"
          >
            <path
              d="M0 150 C150 50, 300 200, 450 140 C600 80, 750 250, 900 120"
              stroke="#FF6A6A"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative w-full h-[500px] lg:h-[600px]">
            {[
              {
                number: "1",
                title: "Project Discovery Call",
                text: "Party we years to order allow asked of. We so opinion friends me message as delight.",
                // pos: "bottom-0 left-0",
                pos: "bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:left-0 sm:translate-x-0 sm:translate-y-0"
              },
              {
                number: "2",
                title: "Requirement Finalization",
                text: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
                pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              },
              {
                number: "3",
                title: "Execution & Delivery",
                text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.",
                // pos: "top-0 right-0",
                pos: "bottom-1/2 left-1/2 -translate-x-1/2 translate-y-60 sm:top-0 sm:right-0 sm:left-auto sm:translate-x-0 sm:translate-y-0",
              },
            ].map((step, index) => (
              <div key={index} className={`absolute ${step.pos} w-[250px]`}>
                <div className="relative flex flex-col items-start">
                  <div className="bg-white shadow-lg rounded-[20px] w-12 h-12 flex items-center justify-center">
                    <span className="w-4 h-4 bg-gray-300 rounded-full"></span>
                  </div>

                  <h3 className="font-bold text-lg mt-4">{step.title}</h3>
                  <p className="text-gray-500 text-sm mt-1 max-w-xs">
                    {step.text}
                  </p>

                  <span className="hidden lg:block absolute text-[200px] font-bold text-gray-200 -z-10 -top-24 right-3">
                    {step.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
