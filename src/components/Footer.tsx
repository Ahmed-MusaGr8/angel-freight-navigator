import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">Angel's Trucking</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional trucking and logistics services across Canada and North America. 
              Your freight, our priority - delivering on-time, every time.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 (780) 707 - 8444</p>
              <p>✉️ info@angelstrucking.com</p>
              <p>📍 Licensed & Insured • 24/7 Dispatch</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/fleet" className="hover:text-primary transition-colors">Fleet & Technology</Link></li>
              <li><Link to="/quote" className="hover:text-primary transition-colors">Get Quote</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Full-Truckload (FTL)</li>
              <li>Less-Than-Truckload (LTL)</li>
              <li>Cross-Border Shipping</li>
              <li>Expedited Freight</li>
              <li>Warehousing & Distribution</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Angel's Trucking. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;