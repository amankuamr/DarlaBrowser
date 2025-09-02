"use client"

import { Search, Menu, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-effect"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo - Fixed width */}
            <motion.div 
              className="flex items-center space-x-3 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <Crown className="h-8 w-8 lg:h-10 lg:w-10 text-yellow-400 glow-gold" />
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 lg:h-4 lg:w-4 text-yellow-300 animate-pulse" />
              </div>
              <span className="text-lg lg:text-2xl font-bold gold-gradient text-glow whitespace-nowrap">
                Darla Browser
              </span>
            </motion.div>

            {/* Search Bar - Hidden on smaller screens */}
            <div className="hidden xl:flex items-center flex-1 max-w-md mx-6">
              <motion.div 
                className="relative w-full"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search features..."
                  className="w-full pl-12 pr-6 py-3 premium-input text-white placeholder-gray-400 text-base"
                />
              </motion.div>
            </div>

            {/* Navigation Options - Responsive */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {["Features", "Extensions", "Security", "Download"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium text-base xl:text-lg relative group whitespace-nowrap"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              {/* Search Button for smaller screens */}
              <Button variant="glass" size="icon" className="xl:hidden">
                <Search className="h-5 w-5" />
              </Button>

              {/* Sign In Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <Button variant="gold" size="sm" className="font-bold text-sm lg:text-base px-4 lg:px-6">
                  Sign In
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <Button variant="glass" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="xl:hidden px-4 sm:px-6 lg:px-8 pb-4">
          <motion.div 
            className="relative w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search features, extensions, tools..."
              className="w-full pl-12 pr-6 py-3 premium-input text-white placeholder-gray-400 text-base"
            />
          </motion.div>
        </div>
      </motion.nav>
      
      {/* Animated Separator Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="fixed top-20 xl:top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400 via-red-500 to-transparent z-40 origin-center"
        style={{ top: 'calc(5rem + 0px)' }}
      />
    </>
  )
}