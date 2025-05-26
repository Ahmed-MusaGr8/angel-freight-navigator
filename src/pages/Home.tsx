import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import QuoteForm from '@/components/QuoteForm';
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
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/8f4f3fbc-0fbb-4010-b7f7-7a812a7e60c4.png')`
      }} />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Fast, Reliable,<br />
              <span className="text-primary">and Global</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              From door-to-door delivery to complex supply chain solutions, we ensure your cargo arrives on time and intact, anywhere in the world.
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4 text-sm">
              {trustSignals.map((signal, index) => <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  ✓ {signal}
                </div>)}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              
            </div>
            
            {/* Reviews */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gray-400 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-200">4.9 from 873+ reviews</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Quote Form */}
          <div className="lg:justify-self-end">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whatever your shipping needs, we have the expertise and equipment to deliver excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white px-8 py-4">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Why Choose Angel's Trucking?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Real-Time GPS Tracking</h3>
                    <p className="text-gray-600">Track your shipment 24/7 with our advanced GPS technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">On-Time Delivery Guarantee</h3>
                    <p className="text-gray-600">98.5% on-time delivery rate with our experienced drivers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Cross-Border Expertise</h3>
                    <p className="text-gray-600">Seamless customs clearance and documentation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                  <div className="text-gray-600 mb-6">Successful Deliveries</div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600 mb-6">Customer Support</div>
                  <div className="text-4xl font-bold text-primary mb-2">99.2%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;