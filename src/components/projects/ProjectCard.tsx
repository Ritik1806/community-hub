
import { CalendarIcon, MapPinIcon, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Skill {
  name: string;
}

interface Project {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  image: string;
  skills: string[] | Skill[];
  spots: number;
  spotsRemaining: number;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Handle both string[] and Skill[] types
  const skillsDisplay = project.skills.map((skill) => 
    typeof skill === 'string' ? skill : skill.name
  );

  return (
    <Link 
      to={`/projects/${project.id}`} 
      className={`group ${index % 2 === 0 ? 'mosaic-card' : 'mosaic-card-alt'} flex flex-col h-full animate-[tile-in_0.4s_ease-out_forwards] opacity-0`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-mosaic-purple text-white px-3 py-1 text-sm font-medium">
          {project.spotsRemaining} spots left
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-mosaic-purple transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-500 mb-2">{project.organization}</p>
        
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-2 text-mosaic-blue" />
            <span>{project.date}</span>
          </div>
          
          <div className="flex items-center">
            <MapPinIcon className="h-4 w-4 mr-2 text-mosaic-blue" />
            <span>{project.location}</span>
          </div>
          
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-mosaic-blue" />
            <span>{project.spots} volunteers needed</span>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {skillsDisplay.slice(0, 3).map((skill, i) => (
            <span 
              key={i} 
              className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
          {skillsDisplay.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-md">
              +{skillsDisplay.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
