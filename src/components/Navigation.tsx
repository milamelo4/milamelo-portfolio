import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

useEffect(() => {
  const ids = navItems.map(n => n.href.slice(1));

  const handleScroll = () => {
    const header = document.querySelector("nav") as HTMLElement | null;
    const headerH = header?.offsetHeight ?? 0;
    const y = window.scrollY + headerH + 1;

    let current = ids[0];
    let minDistance = Number.POSITIVE_INFINITY;

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const distance = Math.abs(el.offsetTop - y);
      if (distance < minDistance) {
        minDistance = distance;
        current = id;
      }
    }

    setActiveSection(current);
};


  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run once on load
  return () => window.removeEventListener('scroll', handleScroll);
}, []);



  const scrollTo = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  setIsOpen(false);
};


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-700 backdrop-blur-md border-b border-border shadow-md shadow-black/10 border-b border-gray-600">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">          
        <div className="flex items-center gap-x-2 inline-flex ">
          <img src="/assets/logo.png" alt="MilaMelo Logo" width={50} height={50}/>
        </div>        

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-label={item.label}
                className={`transition-colors hover:text-sky-300 shadow-sm ${
                  activeSection === item.href.substring(1)
                    ? "text-sky-300 font-semibold"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            
          >
            {isOpen ? <X size={16} strokeWidth={2.5}/> : <Menu size={16} strokeWidth={2.5}/>}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
  <div className="md:hidden mt-4 pb-4 space-y-4">
    {navItems.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={`block w-full text-left transition-colors hover:text-primary ${
          activeSection === item.href.substring(1)
            ? "text-primary"
            : "text-muted-foreground"
        }`}
      >
        {item.label}
      </a>
    ))}
  </div>
)}

      </div>
    </nav>
  );
};

export default Navigation;