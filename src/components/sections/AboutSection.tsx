import { Card, CardContent } from '@/components/ui/card';
import { calculateTotalExperience } from '@/data/experience';

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
              Hi! I'm Felipe, a passionate developer with a versatile approach and openness to different technological facets. 
              My journey in the development field has been an exciting adventure, exploring the depths of application creation,
              web design, and ingenious systems.
            </p>

            <p className="text-lg text-muted-foreground">
            My focus encompasses both application development and creating captivating web experiences.
            I believe in the importance of usability and elegance in design, and am constantly looking 
            for ways to improve and optimize both interface and functionality.
            </p>

            <p className="text-lg text-muted-foreground">
            In my free time, I enjoy exploring new technologies, 
            participating in open source projects and sharing knowledge with the community. 
            I strongly believe in continuous learning and am excited for what the future of development has in store.
            </p>

            {/* <div className="pt-4">
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div> */}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">{calculateTotalExperience()}+</div>
                <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
                <p className="text-muted-foreground">
                  Working on web and mobile applications across various industries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
                <p className="text-muted-foreground">
                  Delivering solutions for startups, enterprises, and personal ventures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">16+</div>
                <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
                <p className="text-muted-foreground">
                I have had the opportunity to work in small and large companies and to see small companies grow into large companies. 
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
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