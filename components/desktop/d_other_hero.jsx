import Image from "next/image";
import React from "react";

const OtherHero = () => {
  return (
    <div
      id="hero"
      className="hero pt-18"
      style={{
        backgroundImage: "url(/bg.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="flex w-full min-h-[400px]">
          {/* LEFT */}
          <div className="text-white flex-1 flex items-center">
            <div className="flex flex-col items-start justify-center gap-10">
              <h1 className="text-6xl font-extrabold">
                Powering Your World
                <br /> with Precision
              </h1>
              <p className="text-2xl font-semibold max-w-[80%]">
                Our expert electricians tackle every project with innovation and
                expertise. From simple repairs to complex installations, we're
                the trusted partner you need.
              </p>
              {/* <a
                href="#services"
                className="btn bg-white text-black hover:text-white hover:bg-black transition-all duration-300 ease-in-out py-2 text-xl font-semibold"
              >
                OUR SERVICES
              </a> */}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex flex-1 justify-center items-center relative">
            <div className="relative w-full h-[400px] max-w-[400px]">
              <Image
                src="/logo.png"
                alt="Steelhead Electric Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherHero;
