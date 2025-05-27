
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Satellite, Shield, Clock, MapPin, Fuel } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const Fleet = () => {
  const fleetStats = [
    { icon: Truck, label: "Modern Trucks", value: 150, suffix: "+" },
    { icon: Satellite, label: "GPS Tracked", value: 100, suffix: "%" },
    { icon: Shield, label: "Safety Rating", value: 0, suffix: "", displayValue: "A+" },
    { icon: Clock, label: "Uptime", value: 99.8, suffix: "%" }
  ];

  const trucks = [
    {
      type: "Freightliner Cascadia",
      capacity: "80,000 lbs",
      features: ["GPS Tracking", "Temperature Control", "Load Monitoring"],
      image: "/lovable-uploads/d471c2b8-88e3-4a70-915b-e570e41a2f19.png"
    },
    {
      type: "Volvo VNL",
      capacity: "80,000 lbs", 
      features: ["Advanced Safety", "Fuel Efficient", "Driver Comfort"],
      image: "/lovable-uploads/9fd5e1e5-f46c-481c-9d6b-06b114f6afd2.png"
    },
    {
      type: "Peterbilt 579",
      capacity: "80,000 lbs",
      features: ["Long Haul Optimized", "Aerodynamic Design", "Smart Technology"],
      image: "/lovable-uploads/b8f86701-7e5b-4bfa-acf1-ec7cceb1fed3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Modern Fleet & <span className="text-primary">Advanced Technology</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Our state-of-the-art fleet and cutting-edge technology ensure your freight is transported safely, efficiently, and on time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {fleetStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                  {stat.displayValue ? (
                    stat.displayValue
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Modern Fleet
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Equipped with the latest technology and maintained to the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {trucks.map((truck, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                <div className="aspect-video">
                  <img 
                    src={truck.image} 
                    alt={truck.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2">{truck.type}</h3>
                  <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">Capacity: {truck.capacity}</p>
                  <div className="space-y-2">
                    {truck.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center lg:text-left">
                Advanced Tracking Technology
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Real-Time GPS Tracking</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Monitor your shipment's location and status 24/7 with precise GPS technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Fuel Optimization</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Advanced route planning and fuel management for cost-effective delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">Safety Systems</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Collision avoidance, lane departure warnings, and driver fatigue monitoring</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-gray-100 rounded-2xl p-6 sm:p-8 text-center">
              <div className="bg-primary-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <Satellite className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2">Live Tracking Demo</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Experience our real-time tracking system</p>
                <Button className="bg-primary hover:bg-primary-600 text-white w-full sm:w-auto">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
