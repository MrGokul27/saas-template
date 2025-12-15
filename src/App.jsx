import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Process from "./components/Process";
import NextLevelCard from "./components/NextLevelCard";
import WhyChooseUs from "./components/WhyChooseUs";
import DownloadApp from "./components/DownloadApp";
import Blog from "./components/Blog";
import Feature from "./components/Feature";
import GrowFaster from "./components/GrowFaster";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <div className="hero-background">
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
      </div>
      <Logo />
      <Process />
      <NextLevelCard />
      <GrowFaster />
      <Feature />
      <Testimonials />
      <DownloadApp />
      <Blog />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
