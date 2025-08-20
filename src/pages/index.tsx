import React, { Suspense } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const ServicesSection = React.lazy(() => import("@/components/ServicesSection"));
const PortfolioSection = React.lazy(() => import("@/components/PortfolioSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));
const Footer = React.lazy(() => import("@/components/Footer"));

const SectionSkeleton = () => (
  <div className="animate-pulse space-y-6 py-10">
    <div className="h-6 w-40 rounded bg-muted/60" />
    <div className="h-4 w-72 rounded bg-muted/40" />
    <div className="h-4 w-64 rounded bg-muted/40" />
    <div className="h-48 rounded bg-muted/30" />
  </div>
);


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      <Suspense fallback={<SectionSkeleton />}>
        {/* Lazy-loaded sections */}
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;