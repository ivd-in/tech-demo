import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { InteractiveHoverButton } from "../interactive-hover-button";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/cdn/images/01.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/cdn/images/02.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/cdn/images/03.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/cdn/images/04.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/cdn/images/05.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/cdn/images/01.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
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

export function MarqueeSlide() {
  return (
    <div className="relative flex h-min w-full flex-col items-center justify-center overflow-hidden md:shadow-xl py-4">
      <div className="pt-[2rem] pb-[1rem] mx-20 w-full items-start justify-start flex flex-col">
        <div className="max-w-sm space-y-4 md:mx-40 mx-4">
          <h2 className="text-secondary font-semibold text-3xl">
            Crafting Digital Success with Codify
          </h2>
          <p className="text-muted-foreground text-sm">
            Discover the innovative marketing strategies that set Codify apart,
            driving success in the digital landscape.
          </p>
          <InteractiveHoverButton className="text-xs icon-4">
            Schedule a call
          </InteractiveHoverButton>
        </div>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
