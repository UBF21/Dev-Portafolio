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
    id: 'exp-1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    startDate: new Date('2022-01-01'),
    endDate: null,
    description: [
      'Led a team of 5 developers in building a cloud-based enterprise resource planning system',
      'Improved application performance by 40% through code optimization and caching strategies',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB']
  },
  {
    id: 'exp-2',
    company: 'Digital Innovations Ltd',
    position: 'Full Stack Developer',
    location: 'Boston, MA',
    startDate: new Date('2020-03-01'),
    endDate: new Date('2021-12-31'),
    description: [
      'Developed and maintained multiple client-facing web applications',
      'Integrated third-party APIs and payment gateways',
      'Reduced server response time by 50% through database optimization',
      'Collaborated with UX team to implement responsive designs'
    ],
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'Redis']
  },
  {
    id: 'exp-3',
    company: 'StartUp Ventures',
    position: 'Frontend Developer',
    location: 'Austin, TX',
    startDate: new Date('2019-06-01'),
    endDate: new Date('2020-02-28'),
    description: [
      'Built responsive user interfaces using React and Redux',
      'Implemented real-time features using WebSocket',
      'Created reusable component library reducing development time',
      'Participated in daily stand-ups and sprint planning'
    ],
    technologies: ['React', 'Redux', 'SASS', 'Jest', 'Webpack']
  }
];

export const calculateDuration = (startDate: Date, endDate: Date | null): string => {
  const end = endDate || new Date();
  const months = (end.getFullYear() - startDate.getFullYear()) * 12 +
    (end.getMonth() - startDate.getMonth());
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
  }
};

export const formatDate = (date: Date | null): string => {
  if (!date) return 'Present';
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short'
  });
};