import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Me
              </h2>
              <div className="h-1 w-20 bg-primary rounded mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              I'm a passionate Full Stack Developer with over 5 years of experience
              building web and mobile applications. I specialize in creating clean,
              efficient, and scalable solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground">
              My journey in software development began with a Computer Science degree,
              after which I worked with various startups and enterprises to deliver
              high-quality applications. I'm constantly learning new technologies
              and improving my skills to stay at the forefront of the industry.
            </p>
            
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me hiking, reading tech books,
              or contributing to open-source projects. I believe in writing clean,
              maintainable code and creating intuitive user experiences.
            </p>
            
            <div className="pt-4">
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
                <p className="text-muted-foreground">
                  Working on web and mobile applications across various industries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
                <p className="text-muted-foreground">
                  Delivering solutions for startups, enterprises, and personal ventures.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
                <p className="text-muted-foreground">
                  From small businesses to Fortune 500 companies across the globe.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <h3 className="text-xl font-semibold mb-2">Open Source Packages</h3>
                <p className="text-muted-foreground">
                  Creating and maintaining libraries used by thousands of developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;