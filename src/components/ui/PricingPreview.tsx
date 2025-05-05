"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function PricingPreview() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-8">
            Simple pricing coming soon — Early adopters get lifetime discounts.
          </p>
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            🚀 Limited Time Offer
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-deep-blue-900 mb-2">Early Adopter Special</h3>
            <p className="text-gray-600 mb-6">
              Join our waitlist now and receive a 30% lifetime discount when we launch.
            </p>
            <Button 
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
