"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimomial1 from "../assets/images/testimonial1.png";
import testimomial2 from "../assets/images/testimonial2.avif";
import testimomial3 from "../assets/images/testimonial3.avif";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: testimomial1,
      text: "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.",
      name: "AR Shakir",
      role: "CEO GetNextDesign",
      rating: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Segment-logo.svg/2560px-Segment-logo.svg.png",
    },
    {
      id: 2,
      image: testimomial2,
      text: "Next his only girl meet. By spite about do of do allow blush. Additions in conveying or collected objection in.",
      name: "Emily Carter",
      role: "Product Manager, VisionSoft",
      rating: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      id: 3,
      image: testimomial3,
      text: "Mind what no by kept. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient.",
      name: "Michael Evans",
      role: "Founder, PixelTrade",
      rating: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const t = testimonials[index];

  return (
    <section className="lg:px-20 px-5 py-10 lg:py-20 text-center">
      <p className="text-xs tracking-widest text-[#3734A9] font-bold">
        TESTIMONIALS
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        Check what our clients are saying
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE + SHAPES */}
        <div className="relative flex justify-center">
          <div className="absolute top-0 left-0 bg-blue-400 w-12 h-12 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 bg-cyan-400 w-20 h-20 rounded-tl-full"></div>

          <img
            key={t.id}
            src={t.image}
            className="w-80 h-96 object-cover rounded-xl shadow-md transition-all duration-700"
            alt=""
          />

          {/* ARROWS */}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* RIGHT TEXT */}
        <div className="text-left">
          {/* Quotes */}
          <div className="text-4xl text-orange-500 mb-2">“</div>

          {/* Stars */}
          <div className="flex gap-1 text-orange-500">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-4 transition-all duration-700">
            {t.text}
          </p>

          <p className="font-bold mt-6">{t.name}</p>
          <p className="text-sm text-gray-500">{t.role}</p>

          <img src={t.logo} className="w-24 mt-6 opacity-80" alt="company" />
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-blue-600 w-6" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
