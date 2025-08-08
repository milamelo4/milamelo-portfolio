import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// At the top of your component file, import the video
import zCleaningVideo from "/videos/zcleaning.mp4"; 
import therapistSite from "/assets/therapist.png"

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "ZCleaning App",
      description: "A full-stack business app built for a real cleaning company. Features include client scheduling, payment tracking, and multi-user role management. This was my senior project and showcases the full development lifecycle—from planning to deployment.",
      technologies: ["Node.js", "Express", "Bootstrap", "PostgreSQL", "Render", "Google OAuth"],
      status: "completed",
      video: zCleaningVideo, // Placeholder for video link
      image: "/placeholder-project1.jpg",
      github: "https://github.com/milamelo4/zcleaning-app.git",
      live: "https://zcleaning-app.onrender.com"
    },
    {
      title: "Therapist Website",
      description: "Responsive one-page website with integrated contact form and appointment scheduling. Clean, professional design focused on user experience.",
      technologies: ["React", "Tailwind CSS", "EmailJS", "Responsive Design"],
      status: "completed",
      image: therapistSite,
      github: "https://github.com/milamelo4/therapist-template.git",
      live: "https://milamelo4.github.io/therapist-template/"
    },
    {
      title: "Speech Pathologist Site",
      description: "Accessibility-focused website designed specifically for dyslexic users. Features enhanced readability, clear navigation, and inclusive design principles.",
      technologies: ["React", "ARIA", "WCAG 2.1", "Accessible Design", "CSS Grid"],
      status: "coming-soon",
      image: "/placeholder-project3.jpg",
      github: "#",
      live: "#"
    },
    {
      title: "Python Data Insights",
      description: "Data analysis project using Python, Pandas, and visualization libraries to generate meaningful insights from complex datasets.",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter", "Data Analysis"],
      status: "planned",
      image: "/placeholder-project4.jpg",
      github: "#",
      live: "#"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
      case "coming-soon":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30"><Clock className="h-3 w-3 mr-1" />Coming Soon</Badge>;
      case "planned":
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30"><Clock className="h-3 w-3 mr-1" />Planned</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-20 text-center">
      <section
        ref={ref}
        id="portfolio"
        className={`py-10 sm:py-20 bg-gradient-to-b from-background to-muted/20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-0 sm:px-6 text-left">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="hero-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent projects and technical expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover-scale animate-smooth bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/30 overflow-hidden"
              >
                {project.video ? (
                <div className="aspect-video">
                  <video
                    src={projects[0].video}
                    controls
                    className="w-full h-full rounded-md"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img src={project.image} alt="Placeholder Image" />
                </div>
              )}
      
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {getStatusBadge(project.status)}
                  </div>
                </CardHeader>
      
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
      
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
      
                  {project.status === "completed" && (
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 "
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 btn-glow"
                        onClick={() => window.open(project.live, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block p-6 rounded-lg bg-gradient-to-r from-primary/10 to-emerald-500/20 border border-primary/20">
              <h3 className="text-xl font-bold mb-2">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground">
                I'm constantly working on new projects and expanding my portfolio.
                Check back regularly for updates!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;