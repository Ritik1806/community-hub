
const testimonials = [
  {
    quote: "Community Connect made it so easy to find projects that match my skills. As a web developer, I've been able to help nonprofits improve their online presence.",
    name: "Alex Rivera",
    role: "Volunteer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "We've been able to recruit qualified volunteers for our beach cleanups much more efficiently. The platform has transformed how we manage our environmental initiatives.",
    name: "Sarah Johnson",
    role: "Ocean Guardians",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "The volunteer matching algorithm connected us with exactly the kind of help we needed for our youth mentorship program. The impact has been tremendous.",
    name: "Marcus Chen",
    role: "Education First",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 mosaic-header mx-auto">What People Are Saying</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          See how Community Connect is helping volunteers and organizations create meaningful connections.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg relative animate-[tile-in_0.4s_ease-out_forwards] opacity-0"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-6">
                <svg className="h-10 w-10 text-mosaic-purple/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-8 h-8 bg-mosaic-purple/10 translate-x-1/2 -translate-y-1/2 transform rotate-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
