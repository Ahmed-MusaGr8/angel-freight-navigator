
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "1-800-ANGEL-TRUCK",
      subtext: "24/7 Dispatch Available"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@angelstrucking.ca",
      subtext: "Response within 4 hours"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: "123 Logistics Way, Toronto, ON M5V 3A1",
      subtext: "Monday - Friday, 8AM - 6PM"
    },
    {
      icon: Clock,
      title: "Emergency Line",
      details: "1-800-EMERGENCY",
      subtext: "24/7 Emergency Support"
    }
  ];

  const offices = [
    {
      city: "Toronto",
      address: "123 Logistics Way, Toronto, ON M5V 3A1",
      phone: "(416) 555-0123",
      email: "toronto@angelstrucking.ca"
    },
    {
      city: "Montreal", 
      address: "456 Transport Blvd, Montreal, QC H3B 2Y7",
      phone: "(514) 555-0124",
      email: "montreal@angelstrucking.ca"
    },
    {
      city: "Calgary",
      address: "789 Freight Ave, Calgary, AB T2P 3M5",
      phone: "(403) 555-0125", 
      email: "calgary@angelstrucking.ca"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-primary">Angel's Trucking</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch for quotes, support, or any questions about our services
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{info.title}</h3>
                  <p className="text-navy-900 font-medium mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Send us a Message</h2>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="border-gray-300 focus:border-primary"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-gray-300 focus:border-primary"
                      />
                      <Input
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    
                    <Textarea
                      placeholder="Tell us about your shipping needs or questions *"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="border-gray-300 focus:border-primary"
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-600 text-white py-3"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Locations</h2>
              
              {/* Interactive Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Google Map</p>
                  <p className="text-sm">Head Office: Toronto, ON</p>
                </div>
              </div>

              {/* Office Listings */}
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">{office.city} Office</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-1 text-primary" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-primary" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 opacity-90">Our customer service team is available 24/7 to help with your shipping needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 1-800-ANGEL-TRUCK
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
