"use client"

import { Gift, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const promotions = [
  {
    id: 1,
    tag: "New Feature",
    title: "Enhanced Privacy Mode",
    description: "Experience ultimate privacy with our new enhanced mode. Block all trackers and ads automatically.",
    image: "/images/crate1.png"
  },
  {
    id: 2,
    tag: "Premium Feature",
    title: "Advanced Extensions Hub",
    description: "Access thousands of premium extensions and tools. Customize your browsing experience like never before.",
    image: "/images/crate2.png"
  }
]

export default function PromotionsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="flex items-center justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-3 rounded-2xl glass-effect glow-gold">
            <Gift className="h-10 w-10 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-glow">Latest Features</h2>
          <div className="p-3 rounded-2xl glass-effect glow-gold">
            <Gift className="h-10 w-10 text-yellow-400" />
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {promotions.map((promo, index) => (
            <motion.div 
              key={promo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 md:p-8 flex items-center space-x-6 card-hover"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-6 w-6 text-red-500" />
                  <span className="text-red-400 font-bold text-sm uppercase tracking-wide">
                    {promo.tag}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 text-glow">
                  {promo.title}
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                  {promo.description}
                </p>
                <Button variant="gold" size="lg" className="font-bold">
                  Learn More
                </Button>
              </div>
              
              {/* Image with Red Dot Gradient Background */}
              <div className="hidden md:block relative">
                <div className="w-70 h-70 rounded-2xl relative overflow-hidden bg-gradient-radial from-red-500/30 via-red-600/20 to-transparent flex items-center justify-center">
                  {/* Image */}
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}