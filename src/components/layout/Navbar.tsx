import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              [ FM ]
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="link" onClick={() => scrollToSection('home')}>Home</Button>
            <Button variant="link" onClick={() => scrollToSection('about')}>About</Button>
            <Button variant="link" onClick={() => scrollToSection('experience')}>Experience</Button>
            <Button variant="link" onClick={() => scrollToSection('skills')}>Skills</Button>
            <Button variant="link" onClick={() => scrollToSection('projects')}>Projects</Button>
            <Button variant="link" onClick={() => scrollToSection('opensource')}>Open Source</Button>
            <Button variant="link" onClick={() => scrollToSection('contact')}>Contact</Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm py-4">
          <nav className="flex flex-col space-y-3 px-4">
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('home')}>Home</Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('about')}>About</Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('experience')}>Experience</Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('skills')}>Skills</Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('projects')}>Projects</Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('opensource')}>Open Source</Button>
            <Button variant="ghost" className="justify-start" onClick={() => scrollToSection('contact')}>Contact</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;