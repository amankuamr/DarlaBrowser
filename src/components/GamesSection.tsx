"use client"

import { Flame, TrendingUp, Play, Star } from "lucide-react"
import { motion } from "framer-motion"

const topGames = [
  { id: 7, name: "Craps Champion", tag: "Dice", image: "/images/pic (2).jpg", rating: 4.5 },
  { id: 8, name: "Wheel of Fortune", tag: "Bonus", image: "/images/pic (3).jpg", rating: 4.7 },
  { id: 9, name: "Dragon Tiger", tag: "Asian", image: "/images/pic (4).jpg", rating: 4.6 },
  { id: 10, name: "Sic Bo", tag: "Dice", image: "/images/pic (1).webp", rating: 4.4 },
  { id: 11, name: "Andar Bahar", tag: "Indian", image: "/images/pic (1).jpg", rating: 4.5 },
  { id: 12, name: "Teen Patti", tag: "Popular", image: "/images/pic (2).jpg", rating: 4.8 }
]

const hotGames = [
  { id: 1, name: "Fire Joker", tag: "Hot", image: "/images/pic (3).jpg", rating: 4.9 },
  { id: 2, name: "Book of Dead", tag: "Adventure", image: "/images/pic (4).jpg", rating: 4.8 },
  { id: 3, name: "Starburst", tag: "Classic", image: "/images/pic (1).webp", rating: 4.7 },
  { id: 4, name: "Gonzo's Quest", tag: "Quest", image: "/images/pic (1).jpg", rating: 4.6 },
  { id: 5, name: "Immortal Romance", tag: "Story", image: "/images/pic (2).jpg", rating: 4.8 },
  { id: 6, name: "Thunderstruck II", tag: "Mythology", image: "/images/pic (3).jpg", rating: 4.7 },
  { id: 7, name: "Mega Moolah", tag: "Progressive", image: "/images/pic (4).jpg", rating: 4.9 },
  { id: 8, name: "Dead or Alive", tag: "Western", image: "/images/pic (1).webp", rating: 4.5 },
  { id: 9, name: "Bonanza", tag: "Mining", image: "/images/pic (1).jpg", rating: 4.6 },
  { id: 10, name: "Reactoonz", tag: "Alien", image: "/images/pic (2).jpg", rating: 4.4 },
  { id: 11, name: "Sweet Bonanza", tag: "Sweet", image: "/images/pic (3).jpg", rating: 4.7 },
  { id: 12, name: "Gates of Olympus", tag: "Gods", image: "/images/pic (4).jpg", rating: 4.8 }
]

function GameCard({ game, index }: { game: typeof topGames[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="cursor-pointer group"
    >
      {/* Image Card */}
      <div className="aspect-square rounded-3xl card-hover relative overflow-hidden mb-4">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl z-20"></div>
        
        {/* Play button overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          whileHover={{ scale: 1.1 }}
        >
          <div className="glass-effect rounded-full p-4 glow-gold">
            <Play className="h-8 w-8 text-yellow-400 fill-current" />
          </div>
        </motion.div>

        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Details Below */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <h3 className="text-white font-bold text-base group-hover:text-yellow-400 transition-colors duration-300">
            {game.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-yellow-400 text-sm font-semibold">{game.rating}</span>
          </div>
        </div>
        
        <span className="text-xs px-3 py-1 red-glow text-white rounded-full font-semibold">
          {game.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function GamesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Games */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-2xl glass-effect glow-red">
              <Flame className="h-10 w-10 text-red-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white text-glow">Top Games</h2>
            <div className="p-3 rounded-2xl glass-effect glow-red">
              <Flame className="h-10 w-10 text-red-500" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {topGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Hot Games */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-2xl glass-effect glow-gold">
              <TrendingUp className="h-10 w-10 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white text-glow">Hot Games</h2>
            <div className="p-3 rounded-2xl glass-effect glow-gold">
              <TrendingUp className="h-10 w-10 text-yellow-400" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {hotGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}