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
    <div className="max-w-[1280px] mx-auto px-4 lg:px-20 text-center pt-10">
      <section id="home" className="min-h-screen flex items-center justify-center py-10 bg-gradient-to-b from-background to-secondary py-10 sm:py-20">
        <div className="container mx-auto px-2 sm:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="hero-text">MilaMelo</span>
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
                <Button onClick={scrollToContact} variant="outline" className="btn-glow border-primary hover:bg-sky-600 hover:text-white w-full sm:w-48">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
                  <Button variant="outline" className="btn-glow border-primary hover:bg-sky-600 hover:text-white w-full sm:w-48">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>

              </div>
              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="https://github.com/milamelo4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-sky-600 transition-colors hover-scale"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/camila-demelo-6aa66647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-sky-600 transition-colors hover-scale"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:milamelodev@gmail.com"
                  className="p-3 rounded-full bg-secondary hover:bg-sky-600 transition-colors hover-scale"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-200 rounded-full blur-2xl opacity-10 animate-pulse"></div>
                <img src={`${import.meta.env.BASE_URL}assets/profile.png`} alt="Profile picture" className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl hover-scale" />                
              </div>            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;