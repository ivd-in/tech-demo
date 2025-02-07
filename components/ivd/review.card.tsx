import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-secondary",
        // dark styles
        "dark:border-primary dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 text-secondary">
        <img className="rounded-full" width="48" height="48" alt="" src={img} />
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium">{name}</figcaption>
            <p className="text-xs font-medium">{username}</p>
          </div>
          <span className="text-secondary dark:text-secondary fill-secondary flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              viewBox="0 0 37 35"
              className="w-6"
            >
              <path d="M31.8288 16.9939C33.3979 15.8559 32.5929 13.3748 30.6546 13.3748H24.2071C23.3399 13.3748 22.5714 12.8159 22.3043 11.9908L20.3194 5.85984C19.7225 4.01623 17.115 4.01397 16.5149 5.85655L14.517 11.9915C14.2484 12.8162 13.4789 13.3737 12.6116 13.3722L6.16788 13.3604C4.2292 13.3569 3.41995 15.8373 4.98768 16.9777L10.201 20.7703C10.9017 21.28 11.1944 22.183 10.9261 23.0069L8.93061 29.1343C8.33025 30.9778 10.4411 32.5115 12.0089 31.371L17.22 27.5799C17.9214 27.0697 18.8718 27.0697 19.5732 27.5799L24.799 31.3816C26.3654 32.5211 28.475 30.9911 27.8784 29.1483L25.8902 23.0073C25.6234 22.1831 25.9175 21.2809 26.6188 20.7723L31.8288 16.9939Z" />
              <path d="M25.0817 24.996C25.8063 24.8079 26.2235 24.049 25.994 23.3364C25.7224 22.4931 24.7061 22.1613 23.9892 22.6819C22.8253 23.5273 23.6894 25.3575 25.0817 24.996Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              viewBox="0 0 37 35"
              className="w-6"
            >
              <path d="M31.8288 16.9939C33.3979 15.8559 32.5929 13.3748 30.6546 13.3748H24.2071C23.3399 13.3748 22.5714 12.8159 22.3043 11.9908L20.3194 5.85984C19.7225 4.01623 17.115 4.01397 16.5149 5.85655L14.517 11.9915C14.2484 12.8162 13.4789 13.3737 12.6116 13.3722L6.16788 13.3604C4.2292 13.3569 3.41995 15.8373 4.98768 16.9777L10.201 20.7703C10.9017 21.28 11.1944 22.183 10.9261 23.0069L8.93061 29.1343C8.33025 30.9778 10.4411 32.5115 12.0089 31.371L17.22 27.5799C17.9214 27.0697 18.8718 27.0697 19.5732 27.5799L24.799 31.3816C26.3654 32.5211 28.475 30.9911 27.8784 29.1483L25.8902 23.0073C25.6234 22.1831 25.9175 21.2809 26.6188 20.7723L31.8288 16.9939Z" />
              <path d="M25.0817 24.996C25.8063 24.8079 26.2235 24.049 25.994 23.3364C25.7224 22.4931 24.7061 22.1613 23.9892 22.6819C22.8253 23.5273 23.6894 25.3575 25.0817 24.996Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              viewBox="0 0 37 35"
              className="w-6"
            >
              <path d="M31.8288 16.9939C33.3979 15.8559 32.5929 13.3748 30.6546 13.3748H24.2071C23.3399 13.3748 22.5714 12.8159 22.3043 11.9908L20.3194 5.85984C19.7225 4.01623 17.115 4.01397 16.5149 5.85655L14.517 11.9915C14.2484 12.8162 13.4789 13.3737 12.6116 13.3722L6.16788 13.3604C4.2292 13.3569 3.41995 15.8373 4.98768 16.9777L10.201 20.7703C10.9017 21.28 11.1944 22.183 10.9261 23.0069L8.93061 29.1343C8.33025 30.9778 10.4411 32.5115 12.0089 31.371L17.22 27.5799C17.9214 27.0697 18.8718 27.0697 19.5732 27.5799L24.799 31.3816C26.3654 32.5211 28.475 30.9911 27.8784 29.1483L25.8902 23.0073C25.6234 22.1831 25.9175 21.2809 26.6188 20.7723L31.8288 16.9939Z" />
              <path d="M25.0817 24.996C25.8063 24.8079 26.2235 24.049 25.994 23.3364C25.7224 22.4931 24.7061 22.1613 23.9892 22.6819C22.8253 23.5273 23.6894 25.3575 25.0817 24.996Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="35"
              viewBox="0 0 37 35"
              className="w-6"
            >
              <path d="M31.8288 16.9939C33.3979 15.8559 32.5929 13.3748 30.6546 13.3748H24.2071C23.3399 13.3748 22.5714 12.8159 22.3043 11.9908L20.3194 5.85984C19.7225 4.01623 17.115 4.01397 16.5149 5.85655L14.517 11.9915C14.2484 12.8162 13.4789 13.3737 12.6116 13.3722L6.16788 13.3604C4.2292 13.3569 3.41995 15.8373 4.98768 16.9777L10.201 20.7703C10.9017 21.28 11.1944 22.183 10.9261 23.0069L8.93061 29.1343C8.33025 30.9778 10.4411 32.5115 12.0089 31.371L17.22 27.5799C17.9214 27.0697 18.8718 27.0697 19.5732 27.5799L24.799 31.3816C26.3654 32.5211 28.475 30.9911 27.8784 29.1483L25.8902 23.0073C25.6234 22.1831 25.9175 21.2809 26.6188 20.7723L31.8288 16.9939Z" />
              <path d="M25.0817 24.996C25.8063 24.8079 26.2235 24.049 25.994 23.3364C25.7224 22.4931 24.7061 22.1613 23.9892 22.6819C22.8253 23.5273 23.6894 25.3575 25.0817 24.996Z" />
            </svg>
          </span>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-muted py-2">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-primary md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary dark:from-background"></div>
    </div>
  );
}
