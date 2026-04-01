import { Mail, Linkedin, Github, MapPin, Download, User } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Photo placeholder */}
          <div className="mb-8 md:mb-0 flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-muted border-2 border-border flex items-center justify-center overflow-hidden">
              {/* Replace the placeholder below with: <img src="/your-photo.jpg" alt="Nikolaos Paraskakis" className="w-full h-full object-cover" /> */}
              <User size={64} className="text-muted-foreground/40" />
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4 animate-fade-in-up">
              Software Engineer · PhD Researcher
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Nikolaos<br />Paraskakis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Electrical &amp; Computer Engineer passionate about machine learning, geostatistics, and knowledge graphs.
              Currently a Software Engineer at{" "}
              <span className="text-foreground font-medium">Euphyia Tech</span> and PhD candidate at the{" "}
              <span className="text-foreground font-medium">Technical University of Crete</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-accent" />
                Athens, Greece
              </span>
              <a
                href="mailto:nikolasparaskakis@gmail.com"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail size={15} />
                nikolasparaskakis@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/nikolaosparaskakis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href="https://github.com/nparaskakis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>

            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a
                href="/cv_nikolaos_paraskakis.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
