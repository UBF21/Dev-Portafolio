import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { GithubResponse } from '@/interfaces/GithubResponse';

//https://api.github.com/users/ubf21/repos

const ProjectsSection = () => {
  // const projects = getAllProjects();
  // const allTags = getAllTags();

  const [githubData, setGithubData] = useState<GithubResponse[]>([]);
  const [loadingNugetData, setLoadingNugetData] = useState<boolean>(false);
  const [errorGithubData, setErrorGithubData] = useState<string | null>(null);

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<GithubResponse[]>(githubData.slice(0, 3));
  const [showAll, setShowAll] = useState(false);
  const [tags, setTags] = useState<string[]>([]);





  const filteredProjects = selectedTag
    ? githubData.filter(project => project.topics.includes(selectedTag))
    : githubData;

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
    setShowAll(false);
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

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ubf21/repos');
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const result: GithubResponse[] = await response.json();
        console.log(result);
        setGithubData(result); // Asegúrate de que `result` sea del tipo DataItem[]

        const allTopics = result.reduce((acc: string[], project) => acc.concat(project.topics), [] as string[]);
        const uniqueTags = [...new Set(allTopics)];
        setTags(uniqueTags); // Usando el estado 'tags'
        setVisibleProjects(result.slice(0, 3));

      } catch (err: any) {
        setErrorGithubData(err.message);
      } finally {
        setLoadingNugetData(false);
      }
    };

    fetchGithubData();
  }, []);

  useEffect(() => {
    setVisibleProjects(githubData.slice(0, 3));
  }, [githubData])

  // Este useEffect se ejecuta cada vez que filteredProjects cambia
  useEffect(() => {
    const newFilteredProjects = selectedTag
      ? githubData.filter(project => project.topics.includes(selectedTag))
      : githubData;
    setVisibleProjects(newFilteredProjects.slice(0, 3));
    setShowAll(false); // Resetear "Show More" al cambiar el filtro
  }, [selectedTag, githubData]);

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
          {tags.map(tag => (
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
                  src="https://videos.openai.com/vg-assets/assets%2Ftask_01jv09abtbez2aghr19cmpp0rm%2F1746987769_img_0.webp?st=2025-05-11T17%3A10%3A45Z&se=2025-05-17T18%3A10%3A45Z&sks=b&skt=2025-05-11T17%3A10%3A45Z&ske=2025-05-17T18%3A10%3A45Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=WFXnh2nw7GQSbdG3tRC6RxEdpFPnGjvVt%2BVRAI3cuZU%3D&az=oaivgprodscus"
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <CardHeader className="pb-2">
                <CardTitle>{project.name}</CardTitle>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.topics.slice(0, 3).map(tag => (
                    <Badge key={`${project.id}-${tag}`} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.topics.length - 3}
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
                {project.homepage && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {project.html_url && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.html_url}
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