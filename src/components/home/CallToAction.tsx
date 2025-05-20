
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-mosaic-purple/10 to-mosaic-blue/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of volunteers and organizations working together to create positive change. Find your next volunteer opportunity or post a project today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white px-8 py-6 text-lg">
              <Link to="/register">
                Sign Up as Volunteer <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-mosaic-purple text-mosaic-purple hover:bg-mosaic-purple hover:text-white px-8 py-6 text-lg">
              <Link to="/organizations/register">
                Register Organization
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
