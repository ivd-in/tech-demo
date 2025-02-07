"use client"
import { useState } from "react"; // Import useState hook
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const data = [
  {
    name: "Web Design",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Product Design",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Branding",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "UI/UX",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Video Production",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Web Development",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = data.slice(0, data.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <figure
      className={cn(
        "relative w-[400px] h-[250px] cursor-pointer overflow-hidden rounded-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full">
        <img
          className={cn(
            "aspect-square w-full object-cover transition-transform duration-300",
            isHovered && "scale-110"
          )}
          alt={name}
          src={img || "/placeholder.svg"}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
        )}
        <div
          className={cn(
            "absolute inset-0 flex flex-col items-center w-full justify-center bg-black bg-opacity-70 transition-opacity duration-300 p-4 text-center",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="max-w-[150px] space-y-2">
            <button className="bg-background w-full p-[0.5rem_1rem] text-xs font-semibold rounded-xl">
              View Project
            </button>
            <button className="hover:bg-background/25 text-secondary hover:backdrop-blur-md w-full p-[0.5rem_1rem] text-xs font-semibold rounded-xl">
              Details
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
};

export function CtaMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee className="[--duration:10s]">
        {firstRow.map((data) => (
          <ReviewCard key={data.username} {...data} />
        ))}
      </Marquee>
    </div>
  );
}
