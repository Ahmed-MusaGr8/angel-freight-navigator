
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import QuoteForm from '@/components/QuoteForm';
import AnimatedCounter from '@/components/AnimatedCounter';

const Home = () => {
  const trustSignals = ["Licensed & Insured", "24/7 Dispatch", "Serving Canada & USA Since 2015"];
  const services = [{
    title: "Full-Truckload (FTL)",
    description: "Dedicated truck for your freight with direct delivery",
    icon: "🚛"
  }, {
    title: "Less-Than-Truckload (LTL)",
    description: "Cost-effective shipping for smaller loads",
    icon: "📦"
  }, {
    title: "Cross-Border Shipping",
    description: "Seamless Canada-USA freight transportation",
    icon: "🌎"
  }];
  
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Freight truck with green forest landscape */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&h=1080&fit=crop')`
      }} />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8 lg:py-0">
          {/* Left Column - Hero Text */}
          <div className="text-white space-y-4 sm:space-y-6 animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fast, Reliable,<br />
              <span className="text-primary">and Global</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
              From door-to-door delivery to complex supply chain solutions, we ensure your cargo arrives on time and intact, anywhere in the world.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm justify-center lg:justify-start">
              {trustSignals.map((signal, index) => <div key={index} className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full whitespace-nowrap">
                  ✓ {signal}
                </div>)}
            </div>
            
            {/* Reviews - moved before CTA buttons */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-2 sm:pt-4">
              <div className="flex -space-x-1 sm:-space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=face" 
                  alt="Customer review" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=40&h=40&fit=crop&crop=face" 
                  alt="Customer review" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                  alt="Customer review" 
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-sm sm:text-base">★★★★★</span>
                  <span className="text-xs sm:text-sm text-gray-200 font-medium">4.9</span>
                </div>
                <span className="text-xs text-gray-300">from 873+ reviews</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg w-full sm:w-auto">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Column - Quote Form */}
          <div className="lg:justify-self-end w-full max-w-md lg:max-w-lg mx-auto lg:mx-0">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Whatever your shipping needs, we have the expertise and equipment to deliver excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 h-full">
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                  <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1 text-sm sm:text-base">{service.description}</p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white w-full sm:w-auto">
                    Learn More
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center lg:text-left">
                Why Choose Angel's Trucking?
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Real-Time GPS Tracking</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Track your shipment 24/7 with our advanced GPS technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">On-Time Delivery Guarantee</h3>
                    <p className="text-gray-600 text-sm sm:text-base">98.5% on-time delivery rate with our experienced drivers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Cross-Border Expertise</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Seamless customs clearance and documentation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-primary-50 rounded-2xl p-6 sm:p-8">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div>
                    <AnimatedCounter target={15000} suffix="+" className="text-3xl sm:text-4xl font-bold text-primary mb-2" />
                    <div className="text-gray-600 text-sm sm:text-base">Successful Deliveries</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-600 text-sm sm:text-base">Customer Support</div>
                  </div>
                  <div>
                    <AnimatedCounter target={99.2} suffix="%" className="text-3xl sm:text-4xl font-bold text-primary mb-2" />
                    <div className="text-gray-600 text-sm sm:text-base">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default Home;
