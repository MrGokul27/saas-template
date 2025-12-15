import blogImage1 from "../assets/images/blog1.png";
import blogImage2 from "../assets/images/blog2.png";
import blogImage3 from "../assets/images/blog3.png";
import blogImage4 from "../assets/images/blog4.png";

export default function Blog() {
  return (
    <section className="pb-20 md:px-20 px-5 bg-white">
      {/* HEADER + BUTTON */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our Latest Blog Posts
        </h2>
        <button className="px-6 py-2 bg-[#6658FF] text-white rounded-lg shadow-md hover:opacity-90">
          See All Blog Posts
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT SIDE - BIG BLOG CARDS */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
          {[1, 2].map((item) => (
            <div key={item}>
              <img
                src={item === 1 ? blogImage1 : blogImage2}
                className="w-full h-60 object-cover rounded-xl"
                alt=""
              />

              <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                <span>08-11-2021</span>
                <span>Category</span>
              </div>

              <h3 className="font-bold text-lg mt-2 leading-snug">
                {item === 1
                  ? "Believing neglected so so allowance existence departure."
                  : "In design active temper be uneasy. Thirty for remove plenty regard you."}
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {item === 1
                  ? "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."
                  : "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything."}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - SMALL BLOG LIST */}
        <div className="flex flex-col gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex gap-4 border-b pb-6">
              <img
                src={
                  item === 1
                    ? blogImage1
                    : item === 2
                    ? blogImage2
                    : item === 3
                    ? blogImage3
                    : blogImage4
                }
                className="w-20 h-20 object-cover rounded-lg"
                alt=""
              />

              <div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>08-11-2021</span>
                  <span>Category</span>
                </div>

                <p className="font-semibold mt-1 leading-snug text-gray-800">
                  {item === 1
                    ? "Partiality on or continuing in particular principles"
                    : item === 2
                    ? "Do believing oh disposing to supported allowance we."
                    : item === 3
                    ? "Village did removed enjoyed explain nor ham saw."
                    : "Securing as informed declared or margaret"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
