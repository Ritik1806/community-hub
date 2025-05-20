
import MainLayout from '../components/layout/MainLayout';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectsGrid from '../components/projects/ProjectsGrid';

const Projects = () => {
  return (
    <MainLayout>
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mosaic-header">Volunteer Projects</h1>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Discover meaningful volunteer opportunities that match your skills and interests. 
            Filter by location, category, or date to find the perfect project for you.
          </p>
          
          <ProjectFilters />
          <ProjectsGrid />
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
