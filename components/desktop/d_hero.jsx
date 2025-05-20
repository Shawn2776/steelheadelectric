import Image from "next/image";
import React from "react";

const DesktopHero = () => {
  return (
    <div className="p-5 flex w-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      {/* LEFT */}
      <div className="w-2/3 text-white">
        <div className="w-3/4 h-full flex flex-col items-start justify-center gap-5 pl-60">
          <h1 className="text-6xl font-extrabold">
            Powering Your World
            <br /> with Precision
          </h1>
          <p className="text-2xl font-semibold">
            Our expert electricians tackle every project with innovation and
            expertise. From simple repairs to complex installations, we're the
            trusted partner you need.
          </p>
          <button className="">OUR SERVICES</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/3 flex items-center items-start">
        <Image
          src="/logo.png"
          height={500}
          width={500}
          alt="Steelhead Electric Logo"
        />
      </div>
    </div>
  );
};

export default DesktopHero;
