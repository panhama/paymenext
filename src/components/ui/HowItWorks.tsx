"use client";
import { motion } from "framer-motion";
import { Calendar, ChartBar, PieChart, RefreshCcw } from "lucide-react";
import Image from "next/image";
import { Button } from "./Button";

export default function HowItWorksSection() {
    const steps = [
      {
        number: "01",
        title: "Connect Your Data",
        description: "Integrate with your existing tools and import your business data securely.",
        icon: <RefreshCcw className="w-6 h-6 text-white" />
      },
      {
        number: "02",
        title: "Get AI Analysis",
        description: "Our AI analyzes your data and identifies growth opportunities and roadblocks.",
        icon: <PieChart className="w-6 h-6 text-white" />
      },
      {
        number: "03",
        title: "Follow Your Roadmap",
        description: "Implement your personalized growth plan with clear milestones and action items.",
        icon: <Calendar className="w-6 h-6 text-white" />
      },
      {
        number: "04",
        title: "Grow & Scale",
        description: "Monitor progress, get paid faster, and scale your business with confidence.",
        icon: <ChartBar className="w-6 h-6 text-white" />
      }
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How PayMeNext Works
            </h2>
            <p className="max-w-2xl mx-auto text-slate text-lg">
              Get started in minutes with a simple four-step process designed to transform your business operations.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/30"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center">
                  <div className="absolute -top-5 bg-secondary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-4xl font-bold text-accent mb-3">{step.number}</div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                    <p className="text-slate">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button className="bg-secondary hover:bg-secondary/90 px-8 py-6 text-lg font-semibold">
              See PayMeNext in Action
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }
  