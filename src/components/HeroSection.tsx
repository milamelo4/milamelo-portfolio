import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
// import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="hero-text">Camila DeMelo</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                Full-Stack Developer & Visual Problem Solver
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about coding, debugging, and creating clean, user-friendly web experiences. 
                As a dyslexic and highly visual thinker, I excel at solving complex problems through 
                design and code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} className="btn-glow">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" className="hover-scale">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/camilademelo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors hover-scale"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/camilademelo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors hover-scale"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:camila.portfolio@example.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors hover-scale"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img src="/assets/profile.png" alt="Profile picture" className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl hover-scale" />
              {/* <img
                src={profileImage}
                alt="Camila DeMelo"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl hover-scale"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;