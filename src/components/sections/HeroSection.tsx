import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background/20 dark:from-transparent dark:to-background/40"
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            <span className="block">Hi, I'm </span>
            <span className="gradient-text">John Doe</span>
          </h1>
          
          <p className="animate-fade-in animate-delay-100 text-xl md:text-2xl text-muted-foreground max-w-[700px] mb-8">
            Full Stack Developer specializing in React, .NET, and cloud solutions.
            Building beautiful, functional, and scalable applications.
          </p>
          
          <div className="animate-fade-in animate-delay-200 flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToContact}>
              Contact Me
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToProjects}>
              View My Work
            </Button>
          </div>
          
          <div className="animate-fade-in animate-delay-300 flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-3 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-3 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-full p-3 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;