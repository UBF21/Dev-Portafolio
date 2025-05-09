interface Downloads {
    monthly: number;
    weekly: number;
  }
  
  interface Publisher {
    email: string;
    username: string;
  }
  
  interface Maintainer {
    email: string;
    username: string;
  }
  
  interface Links {
    npm: string;
  }
  
  interface Package {
    name: string;
    keywords: string[];
    version: string;
    description: string;
    sanitized_name: string;
    publisher: Publisher;
    maintainers: Maintainer[];
    license: string;
    date: string;
    links: Links;
  }
  
  interface ScoreDetail {
    popularity: number;
    quality: number;
    maintenance: number;
  }
  
  interface Score {
    final: number;
    detail: ScoreDetail;
  }
  
  interface Flags {
    insecure: number;
  }
  
  interface ObjectItem {
    downloads: Downloads;
    dependents: number;
    updated: string;
    searchScore: number;
    package: Package;
    score: Score;
    flags: Flags;
  }
  
  export interface NpmResponse {
    objects: ObjectItem[];
    total: number;
    time: string;
  }