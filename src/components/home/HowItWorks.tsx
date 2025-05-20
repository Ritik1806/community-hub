
import { User, Search, Calendar, Heart } from 'lucide-react';

const steps = [
  {
    icon: <User className="h-8 w-8 text-mosaic-purple" />,
    title: "Create Your Profile",
    description: "Sign up and build your volunteer profile with skills, interests, and availability."
  },
  {
    icon: <Search className="h-8 w-8 text-mosaic-blue" />,
    title: "Discover Projects",
    description: "Browse and search for volunteer opportunities that match your interests and schedule."
  },
  {
    icon: <Calendar className="h-8 w-8 text-mosaic-teal" />,
    title: "Apply & Schedule",
    description: "Apply to projects, confirm your spot, and add it to your volunteer calendar."
  },
  {
    icon: <Heart className="h-8 w-8 text-mosaic-coral" />,
    title: "Make an Impact",
    description: "Volunteer, track your hours, and see the difference you're making in your community."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 mosaic-header mx-auto">How It Works</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Community Connect makes it easy to find volunteer opportunities and make a difference in your community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md relative animate-[tile-in_0.4s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full h-1 bg-gray-200 z-0 transform translate-x-1/2">
                  <div className="absolute top-1/2 right-0 h-2 w-2 rounded-full bg-mosaic-purple transform -translate-y-1/2"></div>
                </div>
              )}
              
              <div className="flex justify-center mb-4 relative z-10">
                <div className="p-3 rounded-full bg-gray-100">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              
              <div className="absolute top-0 left-0 w-6 h-6 bg-mosaic-purple/20 -translate-x-1/2 -translate-y-1/2 transform rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
