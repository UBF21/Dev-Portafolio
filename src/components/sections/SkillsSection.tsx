import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { getAllCategories, getSkillsByCategory, SkillCategory } from '@/data/skills';

const SkillsSection = () => {
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(categories[0]);
  
  const formatCategoryName = (category: string): string => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and the technologies I work with.
            I continuously expand my skill set to stay current with industry trends.
          </p>
        </div>
        
        <Tabs 
          defaultValue={categories[0]} 
          className="w-full" 
          onValueChange={(value) => setActiveCategory(value as SkillCategory)}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="h-10 items-center justify-center bg-muted p-1 hover:bg-muted/80 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="relative h-8 rounded-md px-4 font-medium transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                >
                  {formatCategoryName(category)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent 
              key={category} 
              value={category} 
              className="mt-0 animate-in fade-in-50 duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getSkillsByCategory(category).map((skill) => (
                  <Card 
                    key={`${category}-${skill.name}`} 
                    className="bg-card shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">
                          {skill.level * 20}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level * 20} 
                        className="h-2 transition-all duration-500"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">My Skills Cloud</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {getSkillsByCategory(activeCategory).map((skill) => (
              <span
                key={`cloud-${skill.name}`}
                className="skill-badge transition-all duration-300"
                style={{
                  fontSize: `${0.8 + (skill.level * 0.1)}rem`,
                  opacity: 0.7 + (skill.level * 0.06),
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;