import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="bg-background container py-20">
      <header className="text-center text-2xl font-bold">
        <h2>FAQs</h2>
      </header>
      <div className="max-w-lg mx-auto w-full pt-5">
        <Accordion type="single" collapsible className="space-y-2">
          <AccordionItem
            value="item-1"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              How do I submit designs requests?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You and your team can request design work through a shared board
              we will set up for you in Asana. You can request as many designs
              as you like.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              How does onboarding work?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Your account manager will set up a call to discuss your design
              needs. After that, you&apos;ll receive an invitation to your
              design board on Asana, along with instructions on how to add your
              design requests
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              How fast will I receive my designs?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You can set your own deadlines for designs but on average, we
              deliver a design within a couple of days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              Do you work at our company?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              It may feel like it but we do not work at your company however we
              do stay in close touch to make sure we provide the best service
              possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              Why wouldn&apos;t I just hire a full-time designer?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              A full-time designer can be expensive and hard to source. Your
              company may not have enough work to keep a full-time designer
              busy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              Can I order a one-time service, like a logo?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We offer a combined All-In-One plan to help you with all your
              design needs. You&apos;re welcome to upgrade for one month to get
              the designs you need, then return to your previous plan for the
              following month.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-7"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              What programs do you use for design?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We work in a wide range of design software, including Figma,
              Photoshop, Illustrator, After Effects, Canva, and many others.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-8"
            className="hover:bg-muted rounded-xl px-4 border"
          >
            <AccordionTrigger className="text-sm">
              Are there any refunds if I don&apos;t like the service?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Because we deliver custom design work it&apos;s not possible to
              issue a refund.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
