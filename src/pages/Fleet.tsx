
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Satellite, Shield, Clock, MapPin, Fuel } from 'lucide-react';

const Fleet = () => {
  const fleetStats = [
    { icon: Truck, label: "Modern Trucks", value: "150+" },
    { icon: Satellite, label: "GPS Tracked", value: "100%" },
    { icon: Shield, label: "Safety Rating", value: "A+" },
    { icon: Clock, label: "Uptime", value: "99.8%" }
  ];

  const trucks = [
    {
      type: "Freightliner Cascadia",
      capacity: "80,000 lbs",
      features: ["GPS Tracking", "Temperature Control", "Load Monitoring"],
      image: "https://images.unsplash.com/photo-1558618666-fbd019c10afc?w=800&h=600&fit=crop"
    },
    {
      type: "Volvo VNL",
      capacity: "80,000 lbs", 
      features: ["Advanced Safety", "Fuel Efficient", "Driver Comfort"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=600&fit=crop"
    },
    {
      type: "Peterbilt 579",
      capacity: "80,000 lbs",
      features: ["Long Haul Optimized", "Aerodynamic Design", "Smart Technology"],
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Modern Fleet & <span className="text-primary">Advanced Technology</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our state-of-the-art fleet and cutting-edge technology ensure your freight is transported safely, efficiently, and on time.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-navy-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Modern Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Equipped with the latest technology and maintained to the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trucks.map((truck, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={truck.image} 
                    alt={truck.type}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{truck.type}</h3>
                  <p className="text-primary font-medium mb-4">Capacity: {truck.capacity}</p>
                  <div className="space-y-2">
                    {truck.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Advanced Tracking Technology
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Real-Time GPS Tracking</h3>
                    <p className="text-gray-600">Monitor your shipment's location and status 24/7 with precise GPS technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Fuel className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Fuel Optimization</h3>
                    <p className="text-gray-600">Advanced route planning and fuel management for cost-effective delivery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Safety Systems</h3>
                    <p className="text-gray-600">Collision avoidance, lane departure warnings, and driver fatigue monitoring</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <Satellite className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Live Tracking Demo</h3>
                <p className="text-gray-600 mb-4">Experience our real-time tracking system</p>
                <Button className="bg-primary hover:bg-primary-600 text-white">
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
