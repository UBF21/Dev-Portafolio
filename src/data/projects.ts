export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  sourceCode?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    liveUrl: 'https://example.com/ecommerce',
    sourceCode: 'https://github.com/example/ecommerce',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A Kanban-style task management application built with React and Firebase. Features include drag-and-drop task organization, task assignment, due dates, and notifications.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Firebase', 'TypeScript', 'Styled Components'],
    liveUrl: 'https://example.com/taskmanager',
    sourceCode: 'https://github.com/example/taskmanager',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for any location. Built with React and the OpenWeatherMap API.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'API Integration', 'Chart.js'],
    liveUrl: 'https://example.com/weather',
    sourceCode: 'https://github.com/example/weather',
    featured: false,
  },
  {
    id: 'project-4',
    title: 'Social Media Dashboard',
    description: 'A dashboard for managing and analyzing social media accounts across multiple platforms. Displays engagement metrics, follower growth, and post performance.',
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'D3.js', 'Node.js', 'Social Media APIs'],
    liveUrl: 'https://example.com/social',
    sourceCode: 'https://github.com/example/social',
    featured: true,
  },
  {
    id: 'project-5',
    title: 'Fitness Tracker',
    description: 'A fitness tracking application that allows users to log workouts, track progress, set goals, and view statistics. Includes workout suggestions and achievements.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['.NET Core', 'C#', 'SQL', 'React'],
    liveUrl: 'https://example.com/fitness',
    sourceCode: 'https://github.com/example/fitness',
    featured: false,
  },
  {
    id: 'project-6',
    title: 'Recipe Finder',
    description: 'A recipe search and recommendation application that helps users find recipes based on ingredients they have. Features filtering by diet, cuisine, and preparation time.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Spoonacular API'],
    liveUrl: 'https://example.com/recipes',
    sourceCode: 'https://github.com/example/recipes',
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};