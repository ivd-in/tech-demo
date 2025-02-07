"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import {
  Diamond,
  Framer,
  HandHeart,
  PenTool,
  ScanSearch,
  Sparkles,
  SquareDashedMousePointer,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Framer Development",
    icon: <Framer size={20} />,
    description: "Custom Framer apps and websites with top-notch performance.",
    image: "/cdn/svg/01.svg",
    background: "bg-[#f5f9f0]",
  },
  {
    name: "Brand Identity",
    icon: <Diamond size={20} />,
    description: "Craft unique, unforgettable brand identities.",
    image: "/cdn/images/brand.png",
    background: "bg-[#f5f9f0]",
  },
  {
    name: "Design System",
    icon: <SquareDashedMousePointer size={20} />,
    description: "Build scalable design systems tailored to your needs.",
    image: "/cdn/images/design.png",
    background: "bg-[#f5f9f0]",
  },
  {
    name: "SEO",
    icon: <ScanSearch size={20} />,
    description: "Optimize your website for search engines.",
    image: "/cdn/images/02.png",
    background: "bg-[#f5f9f0]",
  },
  {
    name: "Product Design",
    icon: <PenTool size={20} />,
    description: "Create engaging, user-friendly product designs.",
    image: "/cdn/images/03.png",
    background: "bg-[#f5f9f0]",
  },
  {
    name: "Animation",
    icon: <Sparkles size={20} />,
    description: "Bring your brand to life with captivating animations.",
    image: "/cdn/images/04.png",
    background: "bg-[#f5f9f0]",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="bg-background py-10">
      <header className="mx-auto text-center space-y-4">
        <Badge variant="outline" className="gap-1">
          <HandHeart className="w-4 h-4" />
          Our Services
        </Badge>
        <h2 className="text-black font-secondary text-2xl font-bold">
          Expert Services That Define Our Excellence.
        </h2>
        <p className="text-sm">
          From creative design to technical solutions, our services define
          industry excellence.
        </p>
      </header>

      <div className="relative grid grid-cols-1 md:grid-cols-[30%_70%] items-center justify-center gap-8 p-8 md:mx-40 md:p-16">
        {/* Service List */}
        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <motion.div
              key={service.name}
              onClick={() => setActiveService(service)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "cursor-pointer rounded-2xl p-2 border transition-all relative",
                activeService.name === service.name
                  ? "bg-secondary duration-75 transition-all"
                  : " hover:bg-gray-100"
              )}
            >
              <div className="flex items-center gap-4 px-4 py-2 text-sm">
                <span>{service.icon}</span>
                <span className="font-semibold">{service.name}</span>
              </div>
              {activeService.name === service.name && (
                <motion.p
                  className="text-xs px-4 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeService.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Content Box */}
        <motion.div
          key={activeService.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border bg-white shadow-lg relative"
        >
          <div className="relative overflow-hidden h-[400px]">
            <motion.img
              src={activeService.image}
              alt={activeService.name}
              className="absolute -right-5 top-5 w-full h-full aspect-video object-cover rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
