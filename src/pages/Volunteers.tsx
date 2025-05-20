
import MainLayout from '../components/layout/MainLayout';

const Volunteers = () => {
  return (
    <MainLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mosaic-header">Our Volunteers</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Our volunteers are the heart of our community. Discover the amazing people who contribute their time,
            skills, and passion to make a difference.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">Become a Volunteer</h2>
            <p className="mb-6">
              Join our community of changemakers and find opportunities that match your skills and interests.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/register" 
                className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px]"
              >
                Sign Up Now
              </a>
              <a 
                href="/projects" 
                className="bg-white border border-mosaic-purple text-mosaic-purple px-6 py-3 rounded-md font-medium transition-all duration-300 hover:translate-y-[-2px] hover:bg-gray-50"
              >
                Browse Projects
              </a>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Recognition Program</h3>
              <p>Our volunteers receive recognition for their valuable contributions and milestone achievements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p>Gain new skills and experiences through volunteer work and specialized training opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p>Make a real difference in your community by contributing to meaningful, impactful projects.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Volunteers;
