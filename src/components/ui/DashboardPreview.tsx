"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function DashboardPreview() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-br from-deep-blue-900 to-electric-blue-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI Financial Command Center</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get a complete view of your business health and automated growth opportunities in one intuitive dashboard.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          <div className="relative w-full h-[500px]">
            <Image
              src="/dashboard-preview.png"
              alt="PayMeNext Dashboard"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Dashboard highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-16 right-16 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg"
          >
            <h4 className="text-lg font-bold mb-2">Business Health Score</h4>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-emerald-400">87</div>
              <div className="ml-2 text-emerald-400">+12%</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-16 left-16 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg"
          >
            <h4 className="text-lg font-bold mb-2">AI Marketing Suggestion</h4>
            <p className="opacity-90">Email campaign targeting repeat customers</p>
            <Button className="mt-3 bg-emerald-500 hover:bg-emerald-600 text-white">Implement Now</Button>
          </motion.div>
        </motion.div>
        
        <div className="mt-10 flex justify-center">
          <Button 
            className="bg-white text-deep-blue-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
