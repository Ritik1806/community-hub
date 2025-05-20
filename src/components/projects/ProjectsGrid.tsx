
import ProjectCard from './ProjectCard';

// Mock project data
const projects = [
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
  },
  {
    id: 5,
    title: "Senior Center Tech Support",
    organization: "Silver Connections",
    location: "Oakwood Senior Center, Boston",
    date: "Nov 8, 2025",
    description: "Provide basic tech support and training for seniors. Help them stay connected with loved ones through technology.",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800",
    skills: ["Technology", "Teaching", "Patience"],
    spots: 10,
    spotsRemaining: 7,
  },
  {
    id: 6,
    title: "Park Trail Maintenance",
    organization: "Nature Conservancy",
    location: "Eagle Mountain Park, Denver",
    date: "Nov 15, 2025",
    description: "Help maintain hiking trails in our local park. Activities include clearing debris, fixing erosion issues, and improving signage.",
    image: "https://images.unsplash.com/photo-1592181572975-7ad0faa3f116?auto=format&fit=crop&q=80&w=800",
    skills: ["Physical Labor", "Outdoors", "Trail Knowledge"],
    spots: 25,
    spotsRemaining: 15,
  },
  {
    id: 7,
    title: "Animal Shelter Assistant",
    organization: "Paws & Claws Rescue",
    location: "Paws & Claws Shelter, Portland",
    date: "Ongoing",
    description: "Help care for rescued animals at our shelter. Tasks include walking dogs, cleaning kennels, and providing socialization for animals.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
    skills: ["Animal Care", "Cleaning", "Compassion"],
    spots: 20,
    spotsRemaining: 8,
  },
  {
    id: 8,
    title: "Community Mural Project",
    organization: "Urban Arts Initiative",
    location: "Downtown Community Center, Atlanta",
    date: "Dec 3-5, 2025",
    description: "Help create a beautiful mural to brighten our community center. Artists and non-artists welcome to help with painting and preparation.",
    image: "https://images.unsplash.com/photo-1581704906775-891dd5207444?auto=format&fit=crop&q=80&w=800",
    skills: ["Art", "Painting", "Creativity"],
    spots: 15,
    spotsRemaining: 11,
  }
];

interface ProjectsGridProps {
  limit?: number;
}

export default function ProjectsGrid({ limit }: ProjectsGridProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
