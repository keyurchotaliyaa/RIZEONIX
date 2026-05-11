import { Mail, MapPin, Phone, Sun } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-gray border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">RIZEONIX</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of advanced solar cleaning systems. Keeping your solar panels efficient and your energy costs low.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="/calculator" className="text-gray-400 hover:text-primary transition-colors">Calculator</a></li>
              <li><a href="/material" className="text-gray-400 hover:text-primary transition-colors">Material</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Phone: 78742 33854</p>
              <p>Email: rizeonixenterprise@gmail.com</p>
              <p>Address: Surat<br /></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RIZEONIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;