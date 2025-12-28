export default function ProcNextLevelCard() {
  return (
    <section className="mb-20">
      {/* Content */}
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-xl gap-6 px-5 md:px-10 py-20 max-w-2xl mx-auto flex flex-col items-center text-center text-white"
        style={{
          backgroundImage: "url('src/assets/images/nextLevelCard.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#16012C]/50 rounded-xl"></div>
        <h2 className="font-extrabold text-4xl z-10">
          Push your product to next level.
        </h2>

        <p className="font-normal text-md z-10">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </p>

        <button className="mt-4 px-6 py-2 bg-[#FF7F5C] text-white rounded-full font-medium shadow-md z-10 transition-transform duration-200 ease-out hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
}
