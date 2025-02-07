"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Code2, Rocket, Headphones, MonitorSmartphone, LightbulbIcon, HandHeart, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    icon: <LightbulbIcon className="w-5 h-5" />,
    title: "Idea",
    description:
      "We meet with your team to learn more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.",
    color: "bg-[#f5f9f0]",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Research",
    description:
      "We will share a detailed questionnaire to analyze your business in-depth. After that, we will be able to create a tailor-made design to reach your business goals.",
    color: "bg-[#f0f4ff]",
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    title: "Web Design",
    description:
      "We will design a mockup or prototype of your website and present it to you. Once with the initial mockup, we will start the revision process to perfect it.",
    color: "bg-[#fdf0f9]",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "No-code development",
    description:
      "We develop websites using the best practices and standards. So you have a perfectly responsive, SEO-friendly, and highly conversion-oriented website.",
    color: "bg-[#fff7f0]",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Launch",
    description:
      "When the project is completed, we will schedule a 2hr session to train your team on using, editing, and taking advantage of your new website.",
    color: "bg-[#f0f9ff]",
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "Support",
    description:
      "We keep a close relationship and communication with your team so we can help you with future design or development needs in the long term.",
    color: "bg-gray-50",
  },
]

export default function StickyCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div className="relative w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="relative min-h-screen py-20 md:px-40">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left side - Fixed content */}
            <div className="lg:sticky lg:top-20 space-y-6">
              <Badge variant="outline" className="gap-1 font-medium">
                <HandHeart className="w-4 h-4" />
                Navigating Success Together
              </Badge>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold tracking-tight"
              >
                We lead you through every step
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground"
              >
                From creative design to technical solutions, our services define industry excellence.
              </motion.p>
            </div>

            {/* Right side - Scrolling cards */}
            <div className="relative space-y-6 lg:space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className={`${step.color} p-6 rounded-2xl space-y-2 border sticky`}
                  style={{
                    top: `${i * 15 + 20}px`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: i * 0.1,
                    },
                  }}
                  viewport={{ once: true, margin: "-20%" }}
                  style={{
                    opacity: scrollYProgress.get() * 1.5, // You can use the scrollYProgress value to animate opacity or other styles
                  }}
                >
                  <div className="flex gap-4 items-center">
                    <span className="text-foreground w-4 h-4">{step.icon}</span>
                    <h3 className="font-semibold text-sm">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-8">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
