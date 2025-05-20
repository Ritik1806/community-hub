
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import MainLayout from '../components/layout/MainLayout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#f7f7fd] to-[#e6e7ff] py-20">
        <div className="text-center">
          <div className="mb-6 relative">
            <div className="text-8xl font-bold relative z-10 mosaic-gradient-text">404</div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-mosaic-purple/10 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-mosaic-blue/10 rounded-lg -rotate-12"></div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
