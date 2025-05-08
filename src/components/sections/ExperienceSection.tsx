import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { experiences, calculateDuration, formatDate } from '@/data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made in previous roles.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <p className="text-lg font-semibold text-primary mb-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {exp.location}
                    </p>
                    
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <p className="text-muted-foreground mb-1">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </p>
                    <p className="font-medium text-primary">
                      {calculateDuration(exp.startDate, exp.endDate)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;