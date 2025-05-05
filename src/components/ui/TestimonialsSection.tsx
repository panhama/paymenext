"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "PayMeNext has simplified our financial planning and automated our marketing efforts. It's like having a CFO and CMO on staff, but at a fraction of the cost.",
      name: "Sarah Johnson",
      title: "Founder, Bloom Digital",
      avatar: "/testimonial-1.jpg"
    },
    {
      quote: "The business health score helped me identify cash flow issues before they became problems. The AI marketing suggestions have increased our conversion rates by 36%.",
      name: "Michael Chen",
      title: "Owner, Adaptive Solutions",
      avatar: "/testimonial-2.jpg"
    },
    {
      quote: "I sleep better knowing PayMeNext is monitoring my business health and automatically optimizing our marketing. It's given me back precious time to focus on growth.",
      name: "Emma Rodriguez",
      title: "CEO, Culinary Co.",
      avatar: "/testimonial-3.jpg"
    }
  ];
  
  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue-900 mb-4">Trusted by Business Owners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how PayMeNext is helping entrepreneurs and small businesses thrive.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm"
              whileHover={{ y: -5 }}
            >
              <div className="flex-1">
                <svg className="h-8 w-8 text-emerald-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-deep-blue-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
