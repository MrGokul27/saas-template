import { Star, Award, Lightbulb } from "lucide-react";

export default function Feature() {
  return (
    <section className="lg:px-20 px-5 py-10 lg:py-20">
      {/* TOP BOX */}
      <div className="border rounded-3xl p-6 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 bg-white shadow-sm">
        {/* LEFT TEXT */}
        <h2 className="text-3xl md:text-4xl font-bold leading-snug max-w-sm">
          Among leave law
          <br />
          built now.
        </h2>

        {/* RIGHT FEATURES */}
        <div className="flex flex-wrap gap-10">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-xl">
              <Star className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-600">
              Village did
              <br />
              remov enjoyed
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-600">
              Nay likely
              <br />
              length sooner
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-xl">
              <Lightbulb className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-600">
              Expense windows
              <br />
              adapted
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="mt-10 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="bg-[#f7f7ff] p-12 rounded-3xl text-center shadow-sm">
          <h3 className="text-2xl font-bold leading-snug">
            Offend belong
            <br />
            promote provision
          </h3>

          <p className="mt-4 text-gray-600">
            Wise busy past both park when an ye no. Nay likely her length sooner
            thrown sex lively income.
          </p>

          <button className="mt-8 bg-[#5a54f4] hover:bg-[#4a43e6] text-white px-10 py-3 rounded-xl font-semibold">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f7f7ff] p-12 rounded-3xl text-center shadow-sm">
          <h3 className="text-2xl font-bold leading-snug">
            Consulted ourselves it
            <br />
            blessing welcom
          </h3>

          <p className="mt-4 text-gray-600">
            The expense windows adapted sir. Wrong widen drawn ample eat off
            doors money.
          </p>

          <button className="mt-8 bg-[#5a54f4] hover:bg-[#4a43e6] text-white px-10 py-3 rounded-xl font-semibold">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
