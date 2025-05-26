
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Globe, Handshake } from 'lucide-react';
import MilestoneAnimation from '@/components/MilestoneAnimation';

const About = () => {
  const milestones = [
    { year: "2015", event: "Angel's Trucking founded in Toronto", description: "Started with a single truck and a vision" },
    { year: "2017", event: "Expanded to cross-border operations", description: "Obtained licenses for Canada-USA freight" },
    { year: "2019", event: "Fleet reached 50 trucks", description: "Rapid growth serving Ontario and Quebec" },
    { year: "2021", event: "Technology upgrade completed", description: "Implemented GPS tracking and digital dispatch" },
    { year: "2023", event: "150+ trucks serving North America", description: "Established as a leading logistics provider" }
  ];

  const leadership = [
    {
      name: "Michael Rodriguez",
      position: "CEO & Founder",
      bio: "25+ years in transportation and logistics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      position: "COO",
      bio: "Expert in operations and supply chain management",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      position: "VP of Safety & Compliance",
      bio: "Former Transport Canada safety inspector",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    { icon: Handshake, title: "Integrity", description: "Honest, transparent business practices in every transaction" },
    { icon: Award, title: "Excellence", description: "Committed to delivering superior service quality" },
    { icon: Users, title: "Partnership", description: "Building long-term relationships with our clients" },
    { icon: Globe, title: "Reliability", description: "Consistent, on-time delivery you can count on" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="text-primary">Angel's Trucking</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Logistics with Integrity - Serving Canada and North America since 2015
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              At Angel's Trucking, we believe in delivering more than just freight. We deliver trust, reliability, and peace of mind. 
              Our mission is to provide exceptional transportation and logistics services that help businesses grow and succeed across North America.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base flex-1">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Key milestones in our growth story</p>
          </div>

          <MilestoneAnimation milestones={milestones} />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">Leadership Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">Meet the experienced professionals leading Angel's Trucking</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <div className="aspect-square">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3 text-sm sm:text-base">{leader.position}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
