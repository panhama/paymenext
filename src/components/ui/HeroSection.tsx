// components/HeroSection.jsx
"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
    ArrowRight, Shield, ChartBar, Book, CheckCircle,
    Calendar, PieChart, RefreshCcw, Zap, Link
  } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#35A77C_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Grow Your Business With <span className="text-accent">AI-Powered</span> Financial Intelligence
              </h1>
              <p className="text-lg md:text-xl max-w-lg">
                PayMeNext combines smart invoicing, competitor benchmarking, and growth roadmaps to take your business to the next level.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Button className="bg-accent text-primary hover:bg-accent/90 px-8 py-6 text-lg font-semibold">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold">
                  Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-2 shadow-xl">
                <div className="bg-slate/5 rounded-md">
                  <div className="flex items-center px-4 py-3 border-b border-white/10">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="mx-auto pr-8 text-sm font-medium">PayMeNext Dashboard</div>
                  </div>
                  <div className="p-5">
                    <Image
                      src="/dashboard-mockup.png" 
                      alt="PayMeNext Dashboard"
                      width={600}
                      height={350}
                      className="rounded-md shadow-lg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
