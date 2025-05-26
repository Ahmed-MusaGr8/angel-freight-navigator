
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Navigation, 
  Package, 
  Weight, 
  Ruler, 
  Loader2, 
  Truck, 
  Clock, 
  Shield, 
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Star
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

const Quote = () => {
  const [activeService, setActiveService] = useState('ftl');

  const services = [
    {
      id: 'ftl',
      name: 'Full Truckload (FTL)',
      description: 'Dedicated truck for your shipment',
      icon: Truck,
      features: ['Faster transit times', 'Direct delivery', 'Enhanced security', 'Large shipments']
    },
    {
      id: 'ltl',
      name: 'Less Than Truckload (LTL)',
      description: 'Cost-effective for smaller shipments',
      icon: Package,
      features: ['Cost-efficient', 'Flexible scheduling', 'Multiple pickup points', 'Small to medium loads']
    },
    {
      id: 'expedited',
      name: 'Expedited Shipping',
      description: 'Time-critical deliveries',
      icon: Clock,
      features: ['24/7 monitoring', 'Priority handling', 'Guaranteed delivery', 'Emergency logistics']
    },
    {
      id: 'cross-border',
      name: 'Cross-Border',
      description: 'International shipping solutions',
      icon: Shield,
      features: ['Customs clearance', 'Documentation support', 'International compliance', 'Border expertise']
    }
  ];

  const benefits = [
    {
      title: 'Free Quote',
      description: 'No hidden fees or charges',
      icon: CheckCircle
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
      icon: Phone
    },
    {
      title: 'Real-time Tracking',
      description: 'Monitor your shipment progress',
      icon: MapPin
    },
    {
      title: 'Guaranteed Delivery',
      description: 'On-time delivery promise',
      icon: Shield
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Manufacturing Corp',
      rating: 5,
      text: 'Angel\'s Trucking has been our go-to logistics partner for over 3 years. Their reliability is unmatched.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Mike Rodriguez',
      company: 'Retail Solutions',
      rating: 5,
      text: 'Fast, efficient, and professional service every time. Highly recommend for any shipping needs.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Chen',
      company: 'Tech Innovations',
      rating: 5,
      text: 'The tracking system and customer support are exceptional. Never had a single issue.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get Your Free Shipping Quote
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
              Professional logistics solutions with transparent pricing. Get an instant quote for your shipping needs.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100 text-sm sm:text-base">Successful Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-2">98.5%</div>
              <div className="text-primary-100 text-sm sm:text-base">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-100 text-sm sm:text-base">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-2">15+</div>
              <div className="text-primary-100 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Quote Form */}
            <div className="order-2 lg:order-1">
              <QuoteForm />
            </div>

            {/* Benefits & Info */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Why Choose Us */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Why Choose Angel's Trucking?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm border">
                      <benefit.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <Card className="bg-primary-50 border-primary-200">
                <CardHeader>
                  <CardTitle className="text-primary">Need Help with Your Quote?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-gray-600">(555) 123-TRUCK</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-gray-600">quotes@angelstrucking.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-gray-600">24/7 Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Shipping Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of logistics solutions designed to meet your specific shipping requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeService === service.id ? 'ring-2 ring-primary border-primary' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader className="text-center">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-navy-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship with Angel's Trucking?</h2>
          <p className="text-primary-100 mb-8 text-lg">
            Join thousands of satisfied customers who trust us with their logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary hover:text-primary-600">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-TRUCK
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="w-5 h-5 mr-2" />
              Email for Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
