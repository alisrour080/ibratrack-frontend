
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin} from 'lucide-react';

const Footer:React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card bg-white text-black">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Ibra<span className="text-blue-500">Track</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for vehicle repair and maintenance tracking.
            </p>
            {/* <div className="flex space-x-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-primary" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link>
              </li>
              <li>
                <Link to="/auth" className="text-muted-foreground hover:text-primary">Login / Register</Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span>R. dos Generais, Luanda, Angola</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <a href="tel:+14155550123">+961 81051073</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <a href="mailto:info@ibratrack.com" className="text-muted-foreground hover:text-primary">info@ibratrack.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border border-gray-300 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} IbraTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
