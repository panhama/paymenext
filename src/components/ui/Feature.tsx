"use client";
import { motion } from "framer-motion";
import { ChartBarIcon, CurrencyDollarIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { ArrowRight, Calendar, ChartBar, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

export default function FeaturesSection() {
    const features = [
      {
        icon: <ChartBar className="w-10 h-10 text-secondary" />,
        title: "AI-Driven Competitor Analysis",
        description: "Get real-time insights on how your business compares to competitors with actionable intelligence to stay ahead."
      },
      {
        icon: <Link className="w-10 h-10 text-secondary" href={""} />,
        title: "Seamless Integrations",
        description: "Connect with QuickBooks, Salesforce, Google Analytics, and all your favorite tools to centralize your business data."
      },
      {
        icon: <Calendar className="w-10 h-10 text-secondary" />,
        title: "Growth Roadmaps",
        description: "AI-generated personalized growth plans with measurable milestones and progress tracking to achieve your goals."
      },
      {
        icon: <Zap className="w-10 h-10 text-secondary" />,
        title: "Smart Invoicing",
        description: "Send professional invoices with AI-powered payment reminders that use behavioral science to get you paid faster."
      }
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Powerful Features For Modern Businesses
            </h2>
            <p className="max-w-2xl mx-auto text-slate text-lg">
              Discover how PayMeNext helps you grow with intelligent tools designed for today's competitive landscape.
            </p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-primary/5 p-3 rounded-full w-fit mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-slate">{feature.description}</p>
              </motion.div>
            ))}
          </div>
  
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg font-semibold">
              Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }
  