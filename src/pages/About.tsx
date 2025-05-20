
import MainLayout from '../components/layout/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mosaic-header">About Community Hub</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Community Hub is a platform dedicated to connecting volunteers with meaningful projects and organizations
            that are making a difference in our communities.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                We believe that everyone has something valuable to contribute. Our mission is to create a vibrant, 
                accessible platform where people can easily find opportunities to make a positive impact, and where
                organizations can connect with passionate volunteers who share their vision.
              </p>
              <p className="text-gray-600">
                By bringing together diverse skills, perspectives, and resources, we aim to strengthen our communities
                and address pressing social and environmental challenges.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                We envision a world where community engagement is accessible to all, where barriers to participation
                are removed, and where the collective power of volunteers creates lasting positive change.
              </p>
              <p className="text-gray-600">
                Community Hub strives to be the bridge that connects people's desire to help with the organizations
                and causes that need their support.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We welcome volunteers of all backgrounds, abilities, and experience levels. Everyone has something to offer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe that partnerships and teamwork amplify our collective impact and create sustainable solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We are committed to open communication about our operations, impact, and the allocation of resources.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="font-semibold">Sarah Johnson</h3>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="font-semibold">Miguel Sanchez</h3>
              <p className="text-sm text-gray-500">Community Director</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="font-semibold">Aisha Williams</h3>
              <p className="text-sm text-gray-500">Project Coordinator</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
              <h3 className="font-semibold">David Chen</h3>
              <p className="text-sm text-gray-500">Technology Lead</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
