export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  level: number; // 1-5
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'mobile' 
  | 'database' 
  | 'devops' 
  | 'tools' 
  | 'languages';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 5 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'NextJS', category: 'frontend', level: 4 },
  { name: 'TailwindCSS', category: 'frontend', level: 5 },
  { name: 'Redux', category: 'frontend', level: 4 },
  { name: 'GraphQL', category: 'frontend', level: 3 },
  { name: 'Vue', category: 'frontend', level: 3 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express', category: 'backend', level: 4 },
  { name: 'NestJS', category: 'backend', level: 3 },
  { name: 'C#', category: 'backend', level: 5 },
  { name: '.NET Core', category: 'backend', level: 5 },
  { name: 'ASP.NET', category: 'backend', level: 5 },
  { name: 'Python', category: 'backend', level: 3 },
  { name: 'Docker', category: 'backend', level: 4 },
  
  // Database
  { name: 'SQL Server', category: 'database', level: 5 },
  { name: 'MongoDB', category: 'database', level: 4 },
  { name: 'PostgreSQL', category: 'database', level: 3 },
  { name: 'Redis', category: 'database', level: 3 },
  
  // DevOps
  { name: 'Azure', category: 'devops', level: 4 },
  { name: 'GitHub Actions', category: 'devops', level: 4 },
  { name: 'CI/CD', category: 'devops', level: 4 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'VS Code', category: 'tools', level: 5 },
  { name: 'Visual Studio', category: 'tools', level: 5 },
  { name: 'Jira', category: 'tools', level: 4 },
  
  // Mobile
  { name: 'React Native', category: 'mobile', level: 4 },
  { name: 'Xamarin', category: 'mobile', level: 3 },
  
  // Languages
  { name: 'C#', category: 'languages', level: 5 },
  { name: 'JavaScript', category: 'languages', level: 5 },
  { name: 'TypeScript', category: 'languages', level: 5 },
  { name: 'Python', category: 'languages', level: 3 },
];

export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getAllCategories = (): SkillCategory[] => {
  const categories = new Set<SkillCategory>();
  skills.forEach(skill => categories.add(skill.category));
  return Array.from(categories);
};