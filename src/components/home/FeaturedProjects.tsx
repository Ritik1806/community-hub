
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';

// Mock project data
const featuredProjects = [
  {
    id: 1,
    title: "Community Garden Restoration",
    organization: "Green Spaces Initiative",
    location: "Central Park, New York",
    date: "Oct 28-30, 2025",
    description: "Help restore our community garden with planting, weeding, and building new garden beds.",
    image: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=800",
    skills: ["Gardening", "Carpentry", "Physical Labor"],
    spots: 12,
    spotsRemaining: 5,
  },
  {
    id: 2,
    title: "Beach Cleanup Initiative",
    organization: "Ocean Guardians",
    location: "Venice Beach, Los Angeles",
    date: "Nov 5, 2025",
    description: "Join our monthly beach cleanup to remove plastic and debris from our beautiful coastline.",
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800",
    skills: ["Environmental", "Physical Labor"],
    spots: 30,
    spotsRemaining: 18,
  },
  {
    id: 3,
    title: "Youth Coding Workshop",
    organization: "Tech Futures",
    location: "Downtown Library, Seattle",
    date: "Nov 12-13, 2025",
    description: "Teach basic coding skills to underprivileged youth and inspire the next generation of technologists.",
    image: "https://images.unsplash.com/photo-1618477202872-8e3138138716?auto=format&fit=crop&q=80&w=800",
    skills: ["Teaching", "Coding", "Mentoring"],
    spots: 8,
    spotsRemaining: 3,
  },
  {
    id: 4,
    title: "Homeless Shelter Food Drive",
    organization: "Helping Hands Coalition",
    location: "Hope Shelter, Chicago",
    date: "Nov 20, 2025",
    description: "Prepare and serve meals for our local homeless shelter. Help with cooking, serving, and cleanup.",
    image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800",
    skills: ["Cooking", "Service", "Organization"],
    spots: 15,
    spotsRemaining: 9,
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mosaic-header">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover impactful volunteer opportunities in your community. From environmental cleanup to mentorship programs, find a project that matches your skills and passion.
            </p>
          </div>
          <Button asChild variant="ghost" className="text-mosaic-purple hover:text-mosaic-purple/90 hover:bg-mosaic-purple/10 mt-4 md:mt-0">
            <Link to="/projects" className="flex items-center">
              View all projects <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
