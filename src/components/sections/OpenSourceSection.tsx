import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getNpmPackages, getNugetPackages, formatDownloads } from '@/data/packages';
import { Copy, ExternalLink, Github } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const OpenSourceSection = () => {
  const npmPackages = getNpmPackages();
  const nugetPackages = getNugetPackages();
  
  const [activeTab, setActiveTab] = useState<'npm' | 'nuget'>('npm');
  
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
              {npmPackages.map(pkg => (
                <Card key={pkg.id} className="package-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                      <Badge variant="secondary">v{pkg.version}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {pkg.tags.map(tag => (
                        <Badge key={`${pkg.id}-${tag}`} variant="outline" className="text-xs">
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
                      <code className="text-sm font-mono">{pkg.installCommand}</code>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(pkg.installCommand, pkg.name)}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy install command</span>
                      </Button>
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{formatDownloads(pkg.downloads)}</span>
                      <span className="mx-1">downloads</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={pkg.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                    
                    {pkg.demoUrl && (
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
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nuget">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nugetPackages.map(pkg => (
                <Card key={pkg.id} className="package-card">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                      <Badge variant="secondary">v{pkg.version}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {pkg.tags.map(tag => (
                        <Badge key={`${pkg.id}-${tag}`} variant="outline" className="text-xs">
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
                      <code className="text-sm font-mono">{pkg.installCommand}</code>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(pkg.installCommand, pkg.name)}
                      >
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">Copy install command</span>
                      </Button>
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <span className="font-medium">{formatDownloads(pkg.downloads)}</span>
                      <span className="mx-1">downloads</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2 flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={pkg.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                    
                    {pkg.demoUrl && (
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
                    )}
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