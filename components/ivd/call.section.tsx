import { InteractiveHoverButton } from "../interactive-hover-button";

export default function CallSection() {
  return (
    <section className="bg-muted container py-20">
        <div className="flex flex-col justify-center items-center gap-6 w-full max-md:px-10">
          <h2 className="text-2xl font-bold">
            We make your SaaS business shine
          </h2>
          <p className="text-sm">
            Book a call to see how Perspective Design can help elevate your
            company's designs to the next level.
          </p>
          <InteractiveHoverButton className="text-sm">
            Schedule a call
          </InteractiveHoverButton>
        </div>
    </section>
  );
}
