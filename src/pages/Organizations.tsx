
import MainLayout from '../components/layout/MainLayout';

const Organizations = () => {
  return (
    <MainLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mosaic-header">Partner Organizations</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            We collaborate with a diverse network of organizations dedicated to creating positive change in our communities.
            These partnerships enable us to maximize our impact and reach.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
            <p className="mb-6">
              Is your organization looking to recruit volunteers or collaborate on community projects?
              Join our network and expand your reach.
            </p>
            <a 
              href="/contact" 
              className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white px-6 py-3 rounded-md font-medium inline-block transition-all duration-300 hover:translate-y-[-2px]"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Benefits for Organizations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access to skilled volunteers</li>
                <li>Project management tools</li>
                <li>Increased community visibility</li>
                <li>Network with other organizations</li>
                <li>Impact tracking and reporting</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">How It Works</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Create an organization profile</li>
                <li>Post your volunteer opportunities</li>
                <li>Review volunteer applications</li>
                <li>Coordinate with your team</li>
                <li>Track progress and share results</li>
              </ol>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Featured Partners</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="font-semibold">City Youth Foundation</h3>
              <p className="text-sm text-gray-600 mt-2">Youth development programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="font-semibold">Green Earth Initiative</h3>
              <p className="text-sm text-gray-600 mt-2">Environmental conservation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="font-semibold">Community Health Alliance</h3>
              <p className="text-sm text-gray-600 mt-2">Public health services</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Organizations;
