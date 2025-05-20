
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex">
            <span className="h-8 w-8 bg-mosaic-purple rounded-tl-lg rounded-br-lg" />
            <span className="h-8 w-8 bg-mosaic-blue -ml-2 rounded-tr-lg rounded-bl-lg" />
          </div>
          <span className="text-xl font-display font-bold">Community Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/projects" className="text-gray-700 hover:text-mosaic-purple transition-colors">
            Projects
          </Link>
          <Link to="/volunteers" className="text-gray-700 hover:text-mosaic-purple transition-colors">
            Volunteers
          </Link>
          <Link to="/organizations" className="text-gray-700 hover:text-mosaic-purple transition-colors">
            Organizations
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-mosaic-purple transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-mosaic-purple text-mosaic-purple hover:bg-mosaic-purple hover:text-white">
            Sign In
          </Button>
          <Button className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white">
            Register
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-mosaic-purple transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 z-50 shadow-md p-4 animate-tile-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/projects" 
              className="text-gray-700 hover:text-mosaic-purple transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/volunteers" 
              className="text-gray-700 hover:text-mosaic-purple transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Volunteers
            </Link>
            <Link 
              to="/organizations" 
              className="text-gray-700 hover:text-mosaic-purple transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Organizations
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-mosaic-purple transition-colors px-4 py-2 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
              <Button variant="outline" className="border-mosaic-purple text-mosaic-purple hover:bg-mosaic-purple hover:text-white w-full">
                Sign In
              </Button>
              <Button className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white w-full">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
