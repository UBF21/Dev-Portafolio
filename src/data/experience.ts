export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: crypto.randomUUID(),
    company: 'IDSLatam',
    position: 'Analista de Software',
    location: 'Lima, Perú',
    startDate: new Date('2024-05-27'),
    endDate: null,
    description: [
      'Microservices development with C# ',
      'Creation, analysis and maintenance of microfrontends with single-spa in ReactJs and Angular.',
      'Api-REST construction, maintenance and analysis',
      'Created reusable component library reducing development time',
      'Creating queries with Linq and extracting data with EF',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React','Angular','Axios', 'Node.js', 'TypeScript', 'Azure', 'Docker', 'Sqlserver','Postgresql','.Net','Entity Framework','Dapper','Micro-Services','Micro-Frontend','MediatR','Clean Architecture','C#','Javascript','Fluent-Validation','Telerik']
  },
  {
    id: crypto.randomUUID(),
    company: 'GlobalTPA Solutions',
    position: 'Programador',
    location: 'Lima, Perú',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-05-31'),
    description: [
      'Developed and maintained multiple client-facing web applications',
      'Integrated third-party APIs',
      'Api-REST construction, maintenance and analysis',
      'Integration and migration management with Azure',
      'Creating queries and extracting data with Ado.Net',
      'Collaborated with UX team to implement responsive designs'
    ],
    technologies: ['Angular', 'CSS',".Net Framework",".Net", 'SqlServer', 'Axios','Dapper','ADO.Net', 'Ajax','JQuery',"HTML5","Bootstrap 5","REST-Api", 'Node.js', 'TypeScript']
  },
  {
    id: crypto.randomUUID(),
    company: 'Colegio Santísimo Salvador',
    position: 'Programador - Freelancer',
    location: 'Arequipa, Perú',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'), 
    description: [  
      'Developed and maintained multiple client-facing web applications',
      'Integrated third-party APIs',
      'Integration with cloud infrastructure with supabase',
      'Database Management with postgresql',
      'Api-REST construction, maintenance and analysis',
      'Development, analysis and maintenance of UI for the client',
      'Collaborated with UX team to implement responsive designs'
    ],
    technologies: ['Angular', 'CSS','Postgresql','SupaBase',"HTML5","Bootstrap 5","REST-Api", 'Node.js', 'TypeScript']
  },
  {
    id: crypto.randomUUID(),
    company: 'CA SISTEMAS',
    position: 'Analista Programador',
    location: 'Lima, Perú',
    startDate: new Date('2023-05-27'),
    endDate: new Date('2023-12-27'),
    description: [
      'Microservices development with C# ',
      'Creation, analysis and maintenance of microfrontends with single-spa in ReactJs and Angular.',
      'Api-REST construction, maintenance and analysis',
      'Creating queries with Linq and extracting data with EF',
      'Mentored junior developers and conducted code reviews',
      'Created reusable component library reducing development time',
      'Participated in daily stand-ups and sprint planning'
    ],
    technologies: ['Angular', 'CSS',".Net Framework",".Net", 'SqlServer', 'Axios','Dapper','ADO.Net', 'Ajax','JQuery',"HTML5","Bootstrap 5","REST-Api",'Node.js', 'TypeScript']
  },
  {
    id: crypto.randomUUID(),
    company: 'Embajada de la República Saharaui',
    position: 'Programador - Freelancer',
    location: 'Lima, Perú',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-12-31'),
    description: [  
      'Developed and maintained multiple client-facing web applications',
      'Integrated third-party APIs',
      'Api-REST construction, maintenance and analysis',
      'Integration with cloud infrastructure with supabase',
      'Database Management with postgresql',
      'Created reusable component library reducing development time',
      'Development, analysis and maintenance of UI for the client',
      'Collaborated with UX team to implement responsive designs'
    ],
    technologies: ['Angular', 'CSS','MySql','Java',"HTML5","Bootstrap 5","Spring Boot",'Spring Security','JWT',"REST-Api", 'Node.js', 'TypeScript']
  }
];

export const calculateDuration = (startDate: Date, endDate: Date | null): string => {
  const end = endDate || new Date();
  const months = (end.getFullYear() - startDate.getFullYear()) * 12 +
    (end.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  // Check if the start date is January 1 and the end date is December 31 of the same year
  if (startDate.getDate() === 1 && end.getDate() === 31 && startDate.getMonth() === 0 && end.getMonth() === 11) {
    return '1 year';
  }

  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  }
};

export const calculateTotalExperience = (): string => {
  let totalMonths = 0;

  experiences.forEach(exp => {
    const end = exp.endDate || new Date(); // Si endDate es null, usar la fecha actual
    const months = (end.getFullYear() - exp.startDate.getFullYear()) * 12 +
      (end.getMonth() - exp.startDate.getMonth());
    totalMonths += months;
  });

  const years = Math.floor(totalMonths / 12);

  return `${years} year${years !== 1 ? 's' : ''}`;
};

export const formatDate = (date: Date | null): string => {
  if (!date) return 'Present';
  
  // Ajusta la fecha para evitar problemas de zona horaria
  const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  
  return adjustedDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short'
  });
};