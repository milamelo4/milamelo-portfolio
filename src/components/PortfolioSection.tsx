import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Clock, CheckCircle, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import zCleaningVideo from "/videos/zcleaning.mp4"; 


const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
const projects = [
  {
    title: "ZCleaning App",
    description:
      "A full-stack business app built for a real cleaning company. Features include client scheduling, payment tracking, and multi-user role management. This was my senior project and showcases the full development lifecycle—from planning to deployment.",
    technologies: ["Node.js", "Express", "Bootstrap", "PostgreSQL", "Render", "Google OAuth"],
    status: "completed",
    video: zCleaningVideo, // Placeholder for video link
    imageLg: "assets/zcleaning-1600.webp",
    imageMd: "assets/zcleaning-800.webp",
    width: 1600,
    height: 733,
    github: "https://github.com/milamelo4/zcleaning-app.git",
    live: "https://zcleaning-app.onrender.com"
  },
  {
    title: "Therapist Website",
    description:
      "Responsive one-page template for therapists. Includes sections for services, about, testimonials, and a contact form placeholder. Deployed to GitHub Pages.",
    technologies: ["React", "Tailwind CSS", "Vite", "Responsive Design", "GitHub Pages", "Accessibility"],
    status: "completed",
    imageLg: "assets/therapist-1600.webp",
    imageMd: "assets/therapist-800.webp",
    width: 1660,
    height: 883,
    video: undefined,
    github: "https://github.com/milamelo4/therapist-template.git",
    live: "https://milamelo4.github.io/therapist-template/"
  },
  {
    title: "Python Data Insights",
    description:
      "Data analysis project using Python, Pandas, and visualization libraries to generate meaningful insights from complex datasets.",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter", "Data Analysis"],
    status: "completed",
    imageLg: "assets/python-790.webp",
    imageMd: "assets/python-400.webp",
    width: 790,
    height: 542,
    github: "https://github.com/milamelo4/sakila-rentals-analysis.git",
    live: "assets/data_analysis_report.pdf",
    video: undefined
  },
  {
    title: "Speech Pathologist Website",
    description: 
    "Responsive one-page website for a speech-language pathologist. Features sections for services, about, rates, and contact information. Optimized for mobile with clean, accessible design and deployed to GitHub Pages.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite", "Responsive Design", "Accessibility"],
    status: "completed",
    imageLg: "assets/speech-1600.webp",
    imageMd: "assets/speech-800.webp",
    width: 1600,
    height: 723,
    github: "https://github.com/milamelo4/speech-therapy.git",
    live: "https://milamelo4.github.io/speech-therapy/",
    video: undefined
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
        className={`cv-auto py-10 sm:py-20 bg-gradient-to-b from-background to-muted/20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        } scroll-mt-24 md:scroll-mt-24 lg:scroll-mt-16`}
      >
        <div className="px-0 sm:px-6 text-left">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="hero-text">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent projects and technical expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col h-full hover-scale animate-smooth bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/30 overflow-hidden"
              >                
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.imageLg}`}
                    srcSet={`
                      ${import.meta.env.BASE_URL}${project.imageMd} 800w,
                      ${import.meta.env.BASE_URL}${project.imageLg} 1600w
                    `}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                    width={project.width}
                    height={project.height}
                    className="w-full h-full object-cover"
                  />            
                </div>          
      
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {getStatusBadge(project.status)}
                  </div>
                </CardHeader>
      
                <CardContent className="space-y-4 flex flex-col h-full">
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
                    <div className="flex-1 flex flex-col justify-end mt-auto">
                      <div className="flex gap-2 mt-auto flex-wrap">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 min-w-[100px] btn-glow"
                          aria-label="Github Repository"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 min-w-[100px] btn-glow"
                          aria-label="Live Preview"
                          onClick={() => window.open(project.live, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                        {project.video && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 min-w-[100px] btn-glow"
                            aria-label="Watch Demo"
                            onClick={() => window.open(project.video, "_blank")}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Watch Demo
                          </Button>
                      )}
                      </div>
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