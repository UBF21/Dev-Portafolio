export interface Package {
  id: string;
  name: string;
  description: string;
  type: 'npm' | 'nuget';
  installCommand: string;
  githubUrl: string;
  downloads: number;
  version: string;
  tags: string[];
  demoUrl?: string;
}

export const packages: Package[] = [
  // NPM Packages
  {
    id: 'pkg-1',
    name: 'react-data-grid',
    description: 'A fast, immutable React data grid for enterprise applications. Features include sorting, filtering, grouping, and virtualization.',
    type: 'npm',
    installCommand: 'npm install react-data-grid',
    githubUrl: 'https://github.com/example/react-data-grid',
    downloads: 1250000,
    version: '3.2.1',
    tags: ['react', 'grid', 'data', 'table'],
    demoUrl: 'https://example.com/react-data-grid-demo',
  },
  {
    id: 'pkg-2',
    name: 'js-utils',
    description: 'A utility library for common JavaScript operations. Includes functions for array manipulation, object operations, string formatting, and more.',
    type: 'npm',
    installCommand: 'npm install @example/js-utils',
    githubUrl: 'https://github.com/example/js-utils',
    downloads: 780000,
    version: '2.4.0',
    tags: ['javascript', 'utilities', 'helper'],
  },
  {
    id: 'pkg-3',
    name: 'react-forms',
    description: 'A form library for React applications. Provides form validation, field masking, and error handling with minimal boilerplate.',
    type: 'npm',
    installCommand: 'npm install @example/react-forms',
    githubUrl: 'https://github.com/example/react-forms',
    downloads: 520000,
    version: '1.9.3',
    tags: ['react', 'forms', 'validation'],
    demoUrl: 'https://example.com/react-forms-demo',
  },
  {
    id: 'pkg-4',
    name: 'state-manager',
    description: 'A lightweight state management library for React applications. Simpler alternative to Redux with less boilerplate.',
    type: 'npm',
    installCommand: 'npm install @example/state-manager',
    githubUrl: 'https://github.com/example/state-manager',
    downloads: 320000,
    version: '1.3.2',
    tags: ['react', 'state', 'management'],
  },
  
  // NuGet Packages
  {
    id: 'pkg-5',
    name: 'Example.Data',
    description: 'A .NET data access library that simplifies database operations with a fluent API. Works with Entity Framework Core and supports SQL Server, PostgreSQL, and SQLite.',
    type: 'nuget',
    installCommand: 'dotnet add package Example.Data',
    githubUrl: 'https://github.com/example/example-data',
    downloads: 890000,
    version: '4.2.0',
    tags: ['.net', 'data', 'entity-framework', 'database'],
  },
  {
    id: 'pkg-6',
    name: 'Example.Api',
    description: 'A .NET library for building RESTful APIs. Includes middleware for authentication, request validation, error handling, and logging.',
    type: 'nuget',
    installCommand: 'dotnet add package Example.Api',
    githubUrl: 'https://github.com/example/example-api',
    downloads: 650000,
    version: '3.1.4',
    tags: ['.net', 'api', 'rest', 'middleware'],
  },
  {
    id: 'pkg-7',
    name: 'Example.Testing',
    description: 'A testing framework for .NET applications. Includes utilities for unit testing, integration testing, and end-to-end testing.',
    type: 'nuget',
    installCommand: 'dotnet add package Example.Testing',
    githubUrl: 'https://github.com/example/example-testing',
    downloads: 420000,
    version: '2.3.1',
    tags: ['.net', 'testing', 'unit-tests', 'integration-tests'],
  },
  {
    id: 'pkg-8',
    name: 'Example.Logging',
    description: 'A structured logging library for .NET applications. Supports console, file, and cloud-based logging providers.',
    type: 'nuget',
    installCommand: 'dotnet add package Example.Logging',
    githubUrl: 'https://github.com/example/example-logging',
    downloads: 380000,
    version: '1.7.5',
    tags: ['.net', 'logging', 'structured-logging'],
  },
];

export const getNpmPackages = (): Package[] => {
  return packages.filter(pkg => pkg.type === 'npm');
};

export const getNugetPackages = (): Package[] => {
  return packages.filter(pkg => pkg.type === 'nuget');
};

export const formatDownloads = (downloads: number): string => {
  if (downloads >= 1000000) {
    return `${(downloads / 1000000).toFixed(1)}M+`;
  } else if (downloads >= 1000) {
    return `${(downloads / 1000).toFixed(1)}K+`;
  }
  return downloads.toString();
};