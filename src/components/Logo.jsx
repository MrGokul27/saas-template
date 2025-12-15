import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import logo5 from "../assets/images/logo5.png";
import logo6 from "../assets/images/logo6.png";
import logo7 from "../assets/images/logo7.png";

export default function Logo() {
  const items = [
    {
      title: "Fast Setup",
      desc: "Get your landing page live in minutes.",
      image: logo1,
    },
    {
      title: "Responsive",
      desc: "Looks perfect on every device.",
      image: logo2,
    },
    {
      title: "Customizable",
      desc: "Modify colors, content, and branding easily.",
      image: logo3,
    },
    {
      title: "Customizable",
      desc: "Modify colors, content, and branding easily.",
      image: logo4,
    },
    {
      title: "Customizable",
      desc: "Modify colors, content, and branding easily.",
      image: logo5,
    },
    {
      title: "Customizable",
      desc: "Modify colors, content, and branding easily.",
      image: logo6,
    },
    {
      title: "Customizable",
      desc: "Modify colors, content, and branding easily.",
      image: logo7,
    },
  ];

  return (
    <section id="features">
      <hr className="border-[#C4C4C4] w-full mb-10 opacity-25" />
      <h2 className="text-center text-2xl font-semibold mb-10">
        Over 32k+ software businesses growing with our Saas
      </h2>
      {/* <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-6 max-w-6xl mx-auto">
        {items.map((f, i) => (
          <div key={i} className="p-6">
            <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>
            <img src={f.image} alt="" />
          </div>
        ))}
      </div> */}
      <div className="overflow-hidden w-full py-10">
        <div className="scroll-track flex gap-12">
          {/* FIRST SET */}
          {items.map((f, i) => (
            <div key={i} className="p-6 flex-shrink-0">
              <img src={f.image} alt="" className="h-5 w-auto" />
            </div>
          ))}

          {/* DUPLICATE SET FOR SEAMLESS LOOP */}
          {items.map((f, i) => (
            <div key={`dup-${i}`} className="p-6 flex-shrink-0">
              <img src={f.image} alt="" className="h-5 w-auto" />
            </div>
          ))}
          {items.map((f, i) => (
            <div key={`dup-${i}`} className="p-6 flex-shrink-0">
              <img src={f.image} alt="" className="h-5 w-auto" />
            </div>
          ))}
        </div>
      </div>
      <hr className="border-[#C4C4C4] w-full mt-10 opacity-25" />
    </section>
  );
}
