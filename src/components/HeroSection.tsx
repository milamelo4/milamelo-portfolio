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
    <div className="max-w-[1280px] mx-auto px-4 lg:px-20 text-center  mt-16 sm:mt-10">
      <section id="home" 
      className="min-h-screen flex items-center justify-center py-10 bg-gradient-to-b from-background to-secondary py-10 sm:py-20
      scroll-mt-24 md:scroll-mt-24 lg:scroll-mt-18 animate-fade-in transition-all duration-700">
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
              <Button
                onClick={scrollToContact}
                variant="outline"
                aria-label="Get In Touch"
                className="btn-glow border-primary hover:bg-sky-600 hover:text-white w-full sm:w-48 h-11 sm:h-10 px-6 text-base sm:text-sm leading-[1.2]"
              >
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                <span
                  className="sm:font-sans"
                  style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}
                >
                  Get In Touch
                </span>
              </Button>

              <a href={`${import.meta.env.BASE_URL}resume.pdf`} download>
              <Button
                variant="outline"
                aria-label="Download Resume"
                className="btn-glow border-primary hover:bg-sky-600 hover:text-white w-full sm:w-48 h-11 sm:h-10 px-6 text-base sm:text-sm leading-[1.2]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span className="inline-block w-[8.5rem] sm:w-auto [font-size-adjust:0.5]">
                  Download Resume
                </span>
              </Button>
              </a>
            </div>

              <div className="flex gap-6 justify-center lg:justify-start">
                <a
                  href="https://github.com/milamelo4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-sky-600 transition-colors hover-scale"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" aria-hidden="true"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/camila-demelo-6aa66647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-sky-600 transition-colors hover-scale"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" aria-hidden="true"/>
                </a>
                <a
                  href="mailto:milamelodev@gmail.com"
                  className="p-3 rounded-full bg-secondary hover:bg-sky-600 transition-colors hover-scale"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" aria-hidden="true"/>
                </a>
              </div>
            </div>
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-200 rounded-full blur-2xl opacity-10 animate-pulse"></div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/profile-710.webp`}
                  srcSet={`${import.meta.env.BASE_URL}assets/profile-360.webp 360w, ${import.meta.env.BASE_URL}assets/profile-710.webp 710w`}
                  sizes="(max-width: 1024px) 320px, 384px"
                  alt="Camila DeMelo profile picture"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl hover-scale"
                  decoding="async"
                  width="710" height="710" 
                   {...{ fetchpriority: "high" }} // bypass React’s prop check
                />         
              </div>            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;