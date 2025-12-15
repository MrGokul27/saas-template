import { Linkedin, MessageCircle, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 md:px-20 px-5 bg-white">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="font-bold text-lg text-[#1a1a1a]">Saas Launch</h2>
          <p className="text-sm text-[#757095] mt-3 w-48 leading-relaxed">
            Simple innate summer fat appear basket his desire joy.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-5 text-[#3734A9]">
            <Linkedin className="w-6 h-6" />
            <MessageCircle className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold text-lg text-[#1a1a1a]">Company</h3>
          <ul className="mt-4 space-y-2 text-[#757095] text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-bold text-lg text-[#1a1a1a]">Resources</h3>
          <ul className="mt-4 space-y-2 text-[#757095] text-sm">
            <li>Templates</li>
            <li>Tutorials</li>
            <li>Free resources</li>
            <li>Contract templates</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-bold text-lg text-[#1a1a1a]">
            Join Our Newsletter
          </h3>

          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 bg-[#F5F5F7] w-full text-sm rounded-l-lg outline-none"
            />
            <button className="px-6 bg-[#00D2FF] text-white text-sm font-medium rounded-r-lg">
              Subscribe
            </button>
          </div>

          <p className="text-xs text-[#757095] mt-3 w-56 leading-relaxed">
            * Will send you weekly updates for your better finance management.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t border-gray-200 mt-12"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-sm text-[#757095] mt-6">
        Copyright © AR Shakir 2022. All Rights Reserved.
      </p>
    </footer>
  );
}
