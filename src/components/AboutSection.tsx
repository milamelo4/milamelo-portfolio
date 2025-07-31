import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Code2, Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const education = [
    {
      degree: "Bachelor of Computer Science",
      year: "2025",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "Associate of Applied Science in Applied Technology",
      year: "Completed",
      icon: <Code2 className="h-5 w-5" />
    },
    {
      degree: "Certificates in Python, Web Design & Full-Stack Development",
      year: "Completed",
      icon: <Palette className="h-5 w-5" />
    }
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-20 bg-gradient-to-b from-background to-muted/20 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 text-left">
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
          <div className="space-y-6">
            <div className="card-gradient">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg font-semibold">Salt Lake City, Utah</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Camila DeMelo is a web developer based in Salt Lake City, Utah. Originally from 
                  São Paulo, Brazil, she brings a global perspective to her creative work.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  She's passionate about coding, debugging, and creating clean, user-friendly web 
                  experiences. As a dyslexic and highly visual thinker, Camila excels at solving 
                  complex problems through design and code.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her unique approach to development combines technical expertise with visual design 
                  sensibility, making her particularly effective at creating accessible and 
                  intuitive user interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Education & Certifications</h3>
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

            {/* Skills Highlight */}
            <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-semibold text-lg mb-3">Key Strengths</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Visual Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Accessibility Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Clean Code Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>User-Centric Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;