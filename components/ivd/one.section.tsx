"use client";
import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import { InteractiveHoverButton } from "../interactive-hover-button";
import { Badge } from "../ui/badge";

const SectionOne = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-r from-primary/20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/cdn/images/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Backdrop overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        {/* Right and Left gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/60 to-transparent" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <header className="mx-auto text-center text-secondary space-y-4">
            <Badge variant={"outline"} className="gap-1 text-secondary p-1.5">
              <HandHeart className="w-4 h-4" />
              Design and Devlopment
            </Badge>
          </header>
          <motion.h1
            className="text-2xl font-bold font-secondary text-white m-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Our Platform
          </motion.h1>
          <motion.p
            className="text-sm text-gray-200 mb-8 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover amazing features and boost your productivity with our
            innovative solutions.
          </motion.p>
          <InteractiveHoverButton className="text-xs">Get Started</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

SectionOne.displayName = "SectionOne";

export { SectionOne };
