"use client";

import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Residential Wiring",
    image: "/home.jpg",
    description:
      "Safe, code-compliant electrical installs and repairs for homes of all sizes.",
  },
  {
    title: "Commercial Installations",
    image: "/commercial.jpg",
    description:
      "From retail shops to office complexes, we power your business with precision.",
  },
  {
    title: "Panel Upgrades",
    image: "/panel.jpg",
    description:
      "Modernize your electrical panel to handle today's power demands safely.",
  },
  // {
  //   title: "EV Charger Installs",
  //   image: "/images/ev.jpg",
  //   description:
  //     "Fast, efficient installation of home and business EV charging stations.",
  // },
  // {
  //   title: "Lighting Design",
  //   image: "/images/lighting.jpg",
  //   description:
  //     "Beautiful, functional lighting setups — indoor, outdoor, and custom work.",
  // },
  // {
  //   title: "24/7 Emergency Service",
  //   image: "/images/emergency.jpg",
  //   description:
  //     "We’re always on-call to keep you safe and your power flowing.",
  // },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">What We Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
