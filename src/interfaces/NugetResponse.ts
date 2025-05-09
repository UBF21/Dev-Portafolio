interface PackageType {
    name: string;
}

interface PackageVersion {
    version: string;
    downloads: number;
    "@id": string;
}

interface NuGetPackage {
    "@id": string;
    "@type": string;
    registration: string;
    id: string;
    version: string;
    description: string;
    summary: string;
    title: string;
    iconUrl: string;
    licenseUrl: string;
    tags: string[];
    authors: string[];
    owners: string[];
    totalDownloads: number;
    verified: boolean;
    packageTypes: PackageType[];
    versions: PackageVersion[];
s    vulnerabilities: any[]; // Puedes definir un tipo más específico si es necesario
}

export interface NuGetResponse {
    totalHits: number;
    data: NuGetPackage[];
}
