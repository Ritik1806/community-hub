
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#f7f7fd] to-[#e6e7ff] py-20 overflow-hidden">
      {/* Decorative tiles */}
      <div className="absolute top-20 -left-10 h-20 w-20 bg-mosaic-purple/10 rounded-lg rotate-12" />
      <div className="absolute top-40 -right-10 h-40 w-40 bg-mosaic-blue/10 rounded-lg -rotate-12" />
      <div className="absolute bottom-10 left-40 h-24 w-24 bg-mosaic-yellow/10 rounded-lg rotate-45" />
      <div className="absolute -bottom-10 right-60 h-32 w-32 bg-mosaic-coral/10 rounded-lg -rotate-6" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="mosaic-gradient-text">Connect</span> & Create <br />
              Community Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Join our mosaic of volunteers and projects to build a better community together, one connection at a time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white px-8 py-6 text-lg">
                <Link to="/projects">
                  Find Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-mosaic-purple text-mosaic-purple hover:bg-mosaic-purple hover:text-white px-8 py-6 text-lg">
                <Link to="/register">
                  Volunteer Sign Up
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="mosaic-card animate-[tile-in_0.3s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.1s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=500&h=500" 
                  alt="Volunteers working together" 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800">Community Garden</h3>
                </div>
              </div>
              
              <div className="mosaic-card-alt animate-[tile-in_0.3s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=500&h=500" 
                  alt="Volunteers cleaning beach" 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800">Beach Cleanup</h3>
                </div>
              </div>
              
              <div className="mosaic-card-alt animate-[tile-in_0.3s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1618477202872-8e3138138716?auto=format&fit=crop&q=80&w=500&h=500" 
                  alt="Volunteers teaching children" 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800">Youth Mentoring</h3>
                </div>
              </div>
              
              <div className="mosaic-card animate-[tile-in_0.3s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.4s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=500&h=500" 
                  alt="Food drive volunteers" 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-800">Food Drive</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
