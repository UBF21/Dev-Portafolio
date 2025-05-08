import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllProjects, getAllTags, Project } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = getAllProjects();
  const allTags = getAllTags();
  
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects.slice(0, 3));
  const [showAll, setShowAll] = useState(false);
  
  const filteredProjects = selectedTag 
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;
  
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
    setShowAll(false);
    setVisibleProjects(filteredProjects.slice(0, 3));
  };
  
  const handleShowMore = () => {
    if (showAll) {
      setVisibleProjects(filteredProjects.slice(0, 3));
      setShowAll(false);
    } else {
      setVisibleProjects(filteredProjects);
      setShowAll(true);
    }
  };
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. These projects showcase my skills in
            web development, design, and problem-solving.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map(tag => (
            <Badge 
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer text-sm py-1 px-3"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? filteredProjects : visibleProjects).map(project => (
            <Card key={project.id} className="project-card overflow-hidden flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <Badge key={`${project.id}-${tag}`} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pb-2 flex-grow">
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex gap-2 pt-2">
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>
                )}
                
                {project.sourceCode && (
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.sourceCode} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredProjects.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleShowMore}
            >
              {showAll ? "Show Less" : "Show More Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;