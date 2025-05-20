
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Mock categories and locations for filter
const categories = [
  "Environment", "Education", "Health", "Community", "Animals", "Arts", "Seniors", "Crisis Response"
];

const locations = [
  "New York", "Los Angeles", "Chicago", "Boston", "Seattle", "Atlanta", "Denver", "Portland"
];

export default function ProjectFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for projects..."
            className="mosaic-input pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="md:w-auto w-full flex items-center justify-center"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>
      
      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-gray-50 rounded-lg animate-[tile-in_0.3s_ease-out_forwards]">
          <div>
            <h3 className="text-sm font-medium mb-2">Category</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input type="checkbox" className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Location</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {locations.map((location) => (
                <label key={location} className="flex items-center">
                  <input type="checkbox" className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2" />
                  <span>{location}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Date</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2" />
                <span>Today</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2" />
                <span>This Week</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2" />
                <span>This Month</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-mosaic-purple focus:ring-mosaic-purple mr-2" />
                <span>Ongoing</span>
              </label>
              
              <div className="mt-4">
                <h4 className="text-xs font-medium mb-1">Custom Range</h4>
                <div className="flex space-x-2">
                  <input type="date" className="mosaic-input text-sm w-full" />
                  <input type="date" className="mosaic-input text-sm w-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 flex justify-end space-x-3">
            <Button variant="ghost">Reset</Button>
            <Button className="bg-mosaic-purple hover:bg-mosaic-purple/90 text-white">Apply Filters</Button>
          </div>
        </div>
      )}
    </div>
  );
}
