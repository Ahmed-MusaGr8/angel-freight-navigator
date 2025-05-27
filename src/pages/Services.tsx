
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Full-Truckload (FTL)",
      description: "Dedicated truck service for large shipments requiring exclusive trailer space. Perfect for time-sensitive deliveries and high-value cargo.",
      icon: "🚛",
      features: ["Dedicated trailer", "Direct delivery", "Priority handling", "Flexible scheduling"]
    },
    {
      title: "Less-Than-Truckload (LTL)",
      description: "Cost-effective solution for smaller shipments that don't require a full trailer. Share trailer space while maintaining competitive rates.",
      icon: "📦",
      features: ["Cost-effective", "Flexible pickup", "Consolidated shipping", "Tracking included"]
    },
    {
      title: "Cross-Border Shipping",
      description: "Seamless transportation between Canada and USA with expert customs clearance and documentation handling.",
      icon: "🌎",
      features: ["Customs clearance", "Documentation", "Border expertise", "Duty management"]
    },
    {
      title: "Expedited Freight",
      description: "Rush delivery service for urgent shipments with guaranteed delivery times and priority handling throughout the journey.",
      icon: "⚡",
      features: ["Rush delivery", "Priority handling", "Time guarantees", "Express service"]
    },
    {
      title: "Warehousing & Distribution",
      description: "Complete storage and distribution solutions with modern facilities and inventory management systems.",
      icon: "🏭",
      features: ["Secure storage", "Inventory management", "Distribution", "Fulfillment services"]
    },
    {
      title: "Temperature-Controlled",
      description: "Specialized refrigerated and climate-controlled transportation for temperature-sensitive goods and perishables.",
      icon: "❄️",
      features: ["Temperature monitoring", "Refrigerated trailers", "Climate control", "Perishable goods"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Comprehensive Logistics Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            From local deliveries to international shipping, we provide end-to-end logistics solutions 
            tailored to your business needs.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            <Link to="/quote">Get Custom Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white h-full flex flex-col">
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-navy-900 px-2 leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 p-4 sm:p-6">
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                  <div className="mt-auto">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-gray-700 leading-relaxed">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary-600 text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Service Excellence Guaranteed
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Every service we provide is backed by our commitment to quality, safety, and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl text-primary">🛡️</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Fully Insured</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Comprehensive cargo insurance on every shipment</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl text-primary">📱</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Real-Time Tracking</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Monitor your shipment 24/7 with GPS tracking</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl text-primary">🎯</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">On-Time Delivery</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">98.5% on-time delivery rate guaranteed</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl sm:text-2xl text-primary">🏆</span>
              </div>
              <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Quality Service</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Award-winning customer service team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Ship with Angel's Trucking?
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get a customized quote for your specific shipping needs and discover why thousands of businesses trust us with their freight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 hover:text-primary-600 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 hover:text-primary-600 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <Link to="/contact">Speak to Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
