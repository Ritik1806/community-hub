
import MainLayout from '../components/layout/MainLayout';
import RegistrationForm from '../components/volunteers/RegistrationForm';

const VolunteerRegistration = () => {
  return (
    <MainLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 mosaic-header">Volunteer Registration</h1>
            <p className="text-gray-600 mb-8">
              Join our community of volunteers making a difference. Create your profile to start connecting with projects that match your skills and interests.
            </p>
            
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default VolunteerRegistration;
