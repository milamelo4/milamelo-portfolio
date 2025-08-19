import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Code2, Laptop2, ScrollIcon,  } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const education = [
    {
      degree: "Bachelor of Computer Science",
      year: "Completed",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "Associate of Applied Science in Applied Technology",
      year: "Completed",
      icon: <Code2 className="h-5 w-5" />
    },
    {
      degree: "Certificates in Computer Programming, Web Design & Full-Stack Development",
      year: "Completed",
      icon: <ScrollIcon className="h-5 w-5" />
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-20 text-center">
      <section
        ref={ref}
        id="about"
        className={`cv-auto py-10 sm:py-20 bg-gradient-to-b from-background to-muted/20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        } scroll-mt-24 md:scroll-mt-24 lg:scroll-mt-16` }
      >
        <div className="container mx-auto px-0 sm:px-6 text-left">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="hero-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer with a unique perspective and global experience
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Bio */}
            <div className="space-y-8">
              <div className="card-gradient">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-lg font-semibold">Salt Lake City, Utah</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm Camila DeMelo — a web developer based in Salt Lake City, originally from São Paulo, Brazil. I bring a global perspective to everything I create.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm passionate about coding, debugging, and building clean, user-friendly web experiences. As someone who's dyslexic and a highly visual thinker, I love solving complex problems through both design and code.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My approach blends technical skills with a strong eye for design, which helps me create websites that are not only functional but also accessible and intuitive for everyone.
                  </p>
                </div>
              </div >
            </div>      
            <div className="space-y-6 flex items-start ">
              <div className="gap-3">
                <img src="/assets/profile2.JPEG" alt="" className="flex gap-3 mb-4 rounded-lg "/>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-center">Education & Certifications</h3>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <Card key={index} className="hover-scale animate-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-1">{item.degree}</h4>
                            <p className="text-muted-foreground">{item.year}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
            {/* Skills */}
            <div className="space-y-8">
              <div className="card-gradient p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Laptop2  className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">HTML</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">CSS</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">JavaScript</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Python</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Node.js</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">PostgreSQL</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">MongoDB</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Bootstrap</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Tailwind CSS</span>
                  <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground">Git</span>
                </div>
              </div>

              {/* Skills Highlight */}
              <div>
                <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/20">
                  <h4 className="font-semibold text-lg mb-3">Key Strengths</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Visual Problem Solving</span>
                    </div>                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Clean Code Practices</span>
                    </div>                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>User-Centric Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Accessibility Focused Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;