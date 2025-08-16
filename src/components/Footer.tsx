import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="cv-auto py-5 border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-0 sm:px-20">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" title="Back to top" className="flex items-center justify-center md:justify-start mb-4">
              <svg
               className="h-24 w-auto fill-current text-primary animate-pulse transition-colors hover:text-emerald-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 172 179"
                preserveAspectRatio="xMidYMid meet"
                >
                <g transform="translate(0,179) scale(0.1,-0.1)"
                fill="currentColor" stroke="none">
                <path d="M385 1668 c71 -25 68 -12 61 -318 -8 -301 -9 -309 -68 -327 -27 -8
                -14 -10 77 -11 107 -1 109 0 70 14 -22 7 -41 14 -42 14 -1 0 -7 16 -13 36 -7
                  20 -10 61 -6 97 3 34 5 140 5 235 1 136 4 172 14 166 9 -6 9 -4 -1 8 -16 20
                -22 51 -13 66 5 8 16 1 33 -18 14 -17 21 -30 15 -31 -7 0 -3 -4 8 -9 13 -6 15
                -9 5 -9 -13 -1 -13 -2 0 -11 8 -5 15 -13 16 -17 0 -4 7 -21 14 -38 7 -16 12
                -34 11 -38 -1 -5 4 -5 10 -1 9 5 10 2 6 -9 -4 -10 -1 -17 5 -17 6 0 8 -3 5 -7
                -4 -3 1 -12 11 -20 16 -12 15 -13 -3 -7 -18 6 -18 5 2 -10 13 -10 20 -23 16
                -32 -3 -9 0 -14 8 -12 8 2 13 -3 11 -11 -1 -7 4 -24 13 -37 8 -13 13 -24 9
                -24 -3 0 4 -15 15 -34 32 -52 24 -91 -10 -49 -12 15 -12 16 5 10 15 -6 17 -5
                8 6 -7 8 -8 18 -4 23 4 4 -2 2 -13 -6 -11 -8 -17 -10 -12 -5 4 4 0 19 -8 32
                -12 17 -12 23 -3 24 7 0 4 4 -7 9 -11 5 -14 9 -7 9 10 1 10 5 -2 17 -14 14
                -21 35 -17 56 0 5 -4 7 -11 5 -6 -1 -16 15 -23 36 -6 21 -14 34 -19 30 -4 -4
                -6 -3 -5 2 2 6 -2 20 -9 33 -7 12 -10 22 -7 22 3 0 1 9 -5 19 -7 14 -6 21 3
                24 6 2 0 4 -15 3 -31 -1 -39 20 87 -249 l88 -189 23 37 22 37 -94 197 c-52
                108 -105 216 -117 241 l-22 45 -75 2 c-63 1 -70 0 -45 -9z"/>
                <path d="M1014 1656 c-27 -42 -193 -430 -187 -439 9 -14 16 0 94 185 45 109
              79 176 86 173 7 -2 10 4 8 18 -5 21 20 57 38 57 6 0 2 -7 -9 -16 -19 -15 -19
              -16 1 -10 17 5 18 4 5 -7 -17 -13 -26 -42 -11 -33 13 8 19 -182 7 -195 -6 -6
              -6 -9 0 -9 6 0 10 -11 10 -25 0 -17 -3 -21 -11 -15 -6 5 -12 40 -13 77 -2 38
              -6 84 -11 103 -7 27 -9 10 -10 -75 l-1 -111 30 -18 30 -17 -53 -77 c-30 -42
              -145 -207 -256 -365 -112 -159 -200 -291 -197 -295 8 -7 -35 -65 406 563 73
              105 165 234 203 288 38 54 66 102 62 105 -3 4 -9 2 -13 -4 -59 -87 -136 -193
              -139 -191 -15 15 -19 305 -4 320 7 7 31 17 54 24 42 11 42 11 -31 11 -64 0
              -75 -3 -88 -22z"/>
                <path d="M1395 1120 c-17 -33 -123 -271 -182 -410 -25 -58 -48 -108 -52 -113
                -4 -4 -18 16 -31 45 -13 29 -54 115 -90 191 l-66 139 -19 -41 -18 -41 68 -145
                c38 -80 72 -145 75 -145 4 0 7 -6 7 -12 0 -18 42 -112 48 -107 2 3 58 130 124
                283 66 153 128 287 138 298 10 11 17 28 15 37 -2 11 4 18 13 18 12 0 15 -6 10
                -21 -9 -27 -12 -88 -6 -101 10 -18 9 -35 0 -41 -5 -3 -6 -11 -2 -17 13 -20 29
                -366 18 -371 -7 -3 -6 -7 0 -13 21 -16 7 -51 -15 -38 -6 4 -7 12 -2 18 4 7 7
                23 5 37 -2 14 -6 86 -9 160 -2 74 -7 169 -10 210 -4 41 -7 83 -7 93 -2 28 -17
                19 -17 -11 0 -15 5 -133 11 -261 11 -260 12 -256 -52 -271 -22 -4 14 -7 96 -7
                104 0 121 2 87 9 -30 7 -45 16 -51 31 -5 12 -11 99 -15 192 -3 94 -9 217 -12
                275 -3 58 -1 111 4 118 5 7 31 19 58 27 l49 13 -78 -1 c-74 0 -79 -2 -92 -27z
                m-401 -253 c-2 -13 1 -17 12 -13 8 3 12 2 9 -3 -3 -5 0 -13 6 -16 5 -4 8 -13
                5 -21 -3 -8 0 -14 7 -14 8 0 7 -4 -3 -10 -17 -11 -27 -3 -32 25 -1 11 -9 26
                -16 33 -7 8 -10 18 -7 23 4 5 2 9 -4 9 -6 0 -8 7 -5 15 8 20 33 -4 28 -28z
                m63 -114 c7 -16 13 -32 14 -38 1 -5 10 -22 21 -37 14 -20 16 -28 6 -28 -7 -1
                -2 -8 12 -16 18 -11 20 -14 5 -10 -18 6 -18 4 3 -12 41 -32 34 -81 -8 -51 -12
                9 -11 10 5 5 17 -5 18 -4 5 7 -20 16 -51 73 -44 80 3 3 -6 22 -21 42 -21 27
                -24 34 -10 29 13 -5 16 -4 11 4 -4 7 -13 12 -19 12 -7 0 -13 9 -14 20 -2 29
                20 24 34 -7z"/>
                <path d="M838 737 c-5 -10 -8 -51 -8 -91 0 -99 -12 -131 -58 -149 -36 -15 -34
                -15 68 -15 91 0 101 2 73 12 -53 19 -58 28 -63 149 -3 64 -8 104 -12 94z"/>
                <path d="M150 180 c0 -43 4 -60 13 -60 9 0 12 11 9 35 -5 41 10 46 26 10 6
                -14 16 -25 22 -25 6 0 16 11 22 25 16 36 31 31 26 -10 -3 -24 0 -35 9 -35 9 0
                13 17 13 60 0 71 -16 79 -46 25 -10 -19 -21 -35 -25 -35 -3 0 -14 16 -25 35
                -29 54 -44 45 -44 -25z"/>
                <path d="M380 180 c0 -33 4 -60 10 -60 6 0 10 27 10 60 0 33 -4 60 -10 60 -6
                0 -10 -27 -10 -60z"/>
                <path d="M490 180 l0 -60 45 0 c25 0 45 5 45 10 0 6 -16 10 -36 10 l-36 0 4
                50 c2 35 -1 50 -9 50 -9 0 -13 -19 -13 -60z"/>
                <path d="M658 180 c-19 -43 -23 -60 -14 -60 8 0 16 7 20 15 7 20 65 20 72 0 4
                -8 12 -15 19 -15 10 0 6 17 -13 60 -16 36 -33 60 -42 60 -9 -1 -27 -26 -42
                -60z m56 13 c7 -18 -14 -37 -27 -24 -9 9 1 41 13 41 4 0 11 -8 14 -17z"/>
                <path d="M940 180 c0 -47 3 -60 15 -60 11 0 15 11 15 38 l0 37 21 -34 21 -34
                21 34 22 34 3 -37 c5 -61 22 -44 22 22 0 70 -17 80 -43 25 -9 -19 -20 -35 -25
                -35 -5 0 -16 16 -25 35 -27 57 -47 46 -47 -25z"/>
                <path d="M1170 180 l0 -60 45 0 c25 0 45 5 45 10 0 6 -16 10 -36 10 -28 0 -35
                3 -32 18 2 12 11 16 31 14 15 -2 27 1 27 7 0 6 -13 11 -30 11 -20 0 -30 5 -30
                15 0 10 11 15 35 15 19 0 35 5 35 10 0 6 -20 10 -45 10 l-45 0 0 -60z"/>
                <path d="M1340 180 l0 -60 45 0 c52 0 61 17 13 22 -32 3 -33 4 -33 51 0 31 -4
                47 -12 47 -9 0 -13 -19 -13 -60z"/>
                <path d="M1512 228 c-22 -28 -22 -55 -1 -81 50 -64 149 1 105 68 -13 19 -25
                25 -55 25 -21 0 -43 -6 -49 -12z m86 -36 c4 -28 -14 -52 -38 -52 -26 0 -43 26
                -36 55 6 22 11 26 39 23 25 -2 33 -8 35 -26z"/>
                </g>
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#home" className="text-muted-foreground hover:text-sky-300 transition-colors">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-sky-300 transition-colors">
                About
              </a>
              <a href="#services" className="text-muted-foreground hover:text-sky-300 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-muted-foreground hover:text-sky-300 transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-sky-300 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/milamelo4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors hover-scale"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" aria-hidden="true"/>
            </a>
            <a
              href="https://www.linkedin.com/in/camila-demelo-6aa66647"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true"/>
            </a>
            <a
              href="mailto:milamelodev@gmail.com"
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors hover-scale"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" aria-hidden="true"/>
            </a>
          </div>
        </div>        
      </div>
      <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} MilaMelo. Made with <Heart className="h-4 w-4 text-primary fill-500" /> All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;