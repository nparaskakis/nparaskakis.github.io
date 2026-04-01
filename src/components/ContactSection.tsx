import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="section-container text-center">
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-accent-bar mx-auto" />

        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Feel free to reach out for research collaborations, engineering projects, or just to say hello.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:nikolasparaskakis@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/nikolaosparaskakis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-accent transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/nparaskakis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-accent transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
