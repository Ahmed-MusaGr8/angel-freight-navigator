
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Truck, Wrench, Headphones } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const Careers = () => {
  const benefits = [
    "Competitive salary and bonuses",
    "Comprehensive health and dental coverage",
    "Retirement savings plan with company matching",
    "Paid vacation and sick leave",
    "Professional development opportunities",
    "Modern equipment and technology"
  ];

  const jobListings = [
    {
      title: "Long Haul Driver",
      department: "Transportation",
      location: "Toronto, ON",
      type: "Full-time",
      salary: "$65,000 - $85,000",
      icon: Truck,
      requirements: ["Valid Class A CDL", "2+ years experience", "Clean driving record", "Cross-border experience preferred"],
      posted: "2 days ago"
    },
    {
      title: "Dispatcher",
      department: "Operations", 
      location: "Montreal, QC",
      type: "Full-time",
      salary: "$45,000 - $55,000",
      icon: Headphones,
      requirements: ["Logistics experience", "Strong communication skills", "Multi-tasking abilities", "Computer proficiency"],
      posted: "1 week ago"
    },
    {
      title: "Fleet Mechanic",
      department: "Maintenance",
      location: "Calgary, AB",
      type: "Full-time", 
      salary: "$55,000 - $70,000",
      icon: Wrench,
      requirements: ["Heavy truck experience", "Trade certification", "Diagnostic skills", "Tool ownership"],
      posted: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build your career with a growing logistics company that values its people
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Why Choose Angel's Trucking?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just a trucking company - we're a family. Our success depends on the dedication and expertise of our team members.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <AnimatedCounter target={150} suffix="+" className="text-3xl font-bold text-primary mb-2" />
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <AnimatedCounter target={8} className="text-3xl font-bold text-primary mb-2" />
                  <div className="text-gray-600">Years Growing</div>
                </div>
                <div>
                  <AnimatedCounter target={95} suffix="%" className="text-3xl font-bold text-primary mb-2" />
                  <div className="text-gray-600">Employee Retention</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                  <div className="text-gray-600">Employee Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">Find your next opportunity with us</p>
          </div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                          <job.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-navy-900">{job.title}</h3>
                            <Badge variant="outline" className="text-primary border-primary">
                              {job.department}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="font-medium text-navy-900 mb-2">Requirements:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.map((req, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-sm text-gray-500">Posted {job.posted}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8">
                      <Button className="w-full lg:w-auto bg-primary hover:bg-primary-600 text-white">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">Simple steps to join our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply Online", description: "Submit your application and resume through our portal" },
              { step: "2", title: "Initial Review", description: "Our HR team reviews your qualifications and experience" },
              { step: "3", title: "Interview", description: "Phone or in-person interview with hiring manager" },
              { step: "4", title: "Start Working", description: "Complete onboarding and begin your career with us" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
