import { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {formatDownloads } from '@/data/packages';
import { Copy, Package } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { NuGetResponse } from '@/interfaces/NugetResponse';
import { NpmResponse } from '@/interfaces/NpmResponse';

const OpenSourceSection = () => {
  // const npmPackages = getNpmPackages();
  // const nugetPackages = getNugetPackages();

  const [nugetData, setNugetData] = useState<NuGetResponse>({ data: [], totalHits: 0 });
  const [, setLoadingNugetData] = useState<boolean>(false);
  const [, setErrorNugetData] = useState<string | null>(null);

  const [npmData, setNpmData] = useState<NpmResponse>({ objects: [], time: "", total: 0 });
  const [, setLoadingNpmData] = useState<boolean>(false);
  const [, setErrorNpmData] = useState<string | null>(null);

  const [, setActiveTab] = useState<'npm' | 'nuget'>('npm');

  const copyToClipboard = (text: string, packageName: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: `The install command for ${packageName} has been copied.`,
        duration: 3000,
      });
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        title: "Failed to copy",
        description: "Please try again or select the text manually.",
        variant: "destructive",
      });
    });
  };

  useEffect(() => {
    const fetchDataNuget = async () => {
      try {
        const response = await fetch('https://azuresearch-usnc.nuget.org/query?q=UBF21');
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const result: NuGetResponse = await response.json();
        setNugetData(result); // Asegúrate de que `result` sea del tipo DataItem[]
      } catch (err: any) {
        setErrorNugetData(err.message);
      } finally {
        setLoadingNugetData(false);
      }
    };

    const fetchDataNpm = async () => {
      try {
        const response = await fetch('https://registry.npmjs.com/-/v1/search?text=author:ubf21');
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const result: NpmResponse = await response.json();
        setNpmData(result); // Asegúrate de que `result` sea del tipo DataItem[]
      } catch (err: any) {
        setErrorNpmData(err.message);
      } finally {
        setLoadingNpmData(false);
      }
    };


    fetchDataNuget();
    fetchDataNpm();
  }, []);

  return (
    <section id="opensource" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open Source Contributions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm passionate about contributing to the developer community through open source.
            Here are some of my published packages that help developers build better software.
          </p>
        </div>

        <Tabs defaultValue="npm" className="w-full" onValueChange={(value) => setActiveTab(value as 'npm' | 'nuget')}>
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="npm" className="px-6 py-1">
              NPM Packages
            </TabsTrigger>
            <TabsTrigger value="nuget" className="px-6 py-1">
              NuGet Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="npm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {npmData.objects.map(pkg => (
                <Card key={crypto.randomUUID()} className="package-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold">{pkg.package.name}</CardTitle>
                      <Badge variant="secondary">v{pkg.package.version}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {pkg.package.keywords.map(tag => (
                        <Badge key={`${crypto.randomUUID()}-${tag}`} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="py-2">
                    <CardDescription className="text-muted-foreground mb-4">
                      {pkg.package.description}
                    </CardDescription>

                    <div className="bg-muted/50 rounded p-2 flex justify-between items-center">
                      <code className="text-sm font-mono"> npm i {pkg.package.name}</code>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(`npm i ${pkg.package.name}`, pkg.package.name)}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy install command</span>
                      </Button>
                    </div>

                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{formatDownloads(pkg.downloads.weekly)}</span>
                      <span className="mx-1">downloads</span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={pkg.package.links.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Package className="h-3.5 w-3.5" />
                        Npm
                      </a>
                    </Button>

                    {/* {pkg.demoUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={pkg.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </a>
                      </Button>
                    )} */}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nuget">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nugetData.data.map(pkg => (
                <Card key={crypto.randomUUID()} className="package-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold">
                        {pkg.title}
                      </CardTitle>
                      <Badge variant="secondary">v{pkg.version}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {pkg.tags.map(tag => (
                        <Badge key={`${crypto.randomUUID()}-${tag}`} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent className="py-2">
                    <CardDescription className="text-muted-foreground mb-4">
                      {pkg.description}
                    </CardDescription>

                    <div className="bg-muted/50 rounded p-2 flex justify-between items-center">
                      <code className="text-sm font-mono">dotnet add package {pkg.title}</code>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(`dotnet add package ${pkg.title}`, pkg.title)}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy install command</span>
                      </Button>
                    </div>

                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{formatDownloads(pkg.totalDownloads)}</span>
                      <span className="mx-1">downloads</span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2 flex gap-2">

                    {/* <Button variant="outline" size="sm" asChild>
                      <a
                        href={pkg.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button> */}

                    {/* {pkg.demoUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={pkg.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Demo
                        </a>
                      </Button>
                    )} */}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default OpenSourceSection;