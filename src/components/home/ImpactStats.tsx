
export default function ImpactStats() {
  return (
    <section className="py-16 bg-gradient-to-r from-mosaic-purple/90 to-mosaic-blue/90 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Community Impact</h2>
        <p className="text-white/90 text-center max-w-2xl mx-auto mb-12">
          Together, our volunteers and organizations are creating meaningful change in communities worldwide.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">1,200+</div>
            <p className="text-xl text-white/90">Registered Volunteers</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">450+</div>
            <p className="text-xl text-white/90">Active Projects</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">85+</div>
            <p className="text-xl text-white/90">Partner Organizations</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold mb-2">25,000+</div>
            <p className="text-xl text-white/90">Volunteer Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
