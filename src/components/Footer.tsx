import { Crown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="glass-effect mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold gold-gradient">CasinoRoyal</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Experience the thrill of premium online gaming with our world-class casino platform. 
              Licensed and regulated for your safety.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">All Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Live Casino</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Sports Betting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Promotions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">VIP Program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Responsible Gaming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">support@casinoroyal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">24/7 Live Chat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CasinoRoyal. All rights reserved. | Licensed by Gaming Authority
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>18+ Only</span>
              <span>•</span>
              <span>Gamble Responsibly</span>
              <span>•</span>
              <span>SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}