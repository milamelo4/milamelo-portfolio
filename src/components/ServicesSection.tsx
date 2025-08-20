import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2Icon, Database, Globe, Mail, Palette, Users } from "lucide-react";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: <Globe className="h-6 w-6 lg:h-8 lg:w-8"/>,
      title: "Custom Website Development",
      description: "Modern, responsive websites built with the latest technologies and best practices for optimal performance and user experience."
    },
    {
      icon: <Code2Icon className="h-6 w-6 lg:h-8 lg:w-8"/>,
      title: "Full-Stack Web Applications",
      description: "Complete web applications with frontend and backend development, including user authentication, API integration, and data management."
    },
    {
      icon: <Database className="h-6 w-6 lg:h-8 lg:w-8"/>,
      title: "Database Design & Setup",
      description: "Efficient database architecture and implementation to ensure your application scales smoothly as your business grows."
    },
    {
      icon: <Users className="h-6 w-6 lg:h-8 lg:w-8"/>,
      title: "Content Updates",
      description: "Free content updates for the first year! Keep your website fresh and current without worrying about additional costs."
    },
    {
      icon: <Palette className="h-6 w-6 lg:h-8 lg:w-8"/>,
      title: "Portfolio & Personal Sites",
      description: "Showcase your work or business with beautiful, professional websites that reflect your unique brand and personality."
    },
    {
      icon: <Mail className="h-6 w-6 lg:h-8 lg:w-8"/>,
      title: "Email Form Integration",
      description: "Seamless contact forms and email integration to ensure you never miss an inquiry from potential clients or customers."
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-20 text-center">
      <section
        ref={ref}
        id="services"
        className={`cv-auto py-10 sm:py-20 transition-all duration-700 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        } scroll-mt-24 md:scroll-mt-24 lg:scroll-mt-16`}
      >
        <div className="px-0 sm:px-6 text-left">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="hero-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I offer comprehensive web development solutions customized to your unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-scale animate-smooth bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/30"
              >
                <CardHeader>
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center text-primary-foreground mb-4"
                  style={{ background: "var(--gradient-primary)" }}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block p-6 rounded-lg bg-gradient-to-r from-primary/10 to-emerald-500/20 border border-primary/20">
              <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
              <p className="text-lg text-muted-foreground">
                <span className="text-primary font-semibold">Free content updates</span> for the first year with any website project!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;