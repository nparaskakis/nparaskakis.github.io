const experiences = [
  {
    title: "Software Engineer",
    company: "Euphyia Tech Ltd",
    location: "Remote",
    period: "Jan 2024 – Present",
    bullets: [
      "Working on EU-funded projects SmartSquare, OpenBEP4EU, and CREDIBLE, developing data-driven solutions for smart building systems",
      "Designed and implemented software, web applications, and data processing pipelines for analytics and system integration",
    ],
  },
  {
    title: "Research Associate",
    company: "Technical University of Crete – School of ECE",
    location: "Chania, Greece",
    period: "Oct 2025 – Present",
    bullets: [
      "Contributing to the HFRI-funded project SLIMNETS (Sparse Local Interaction Machine Networks)",
      "Researching stochastic processes, geostatistics, and machine learning for modeling complex systems",
    ],
  },
  {
    title: "Research Associate – CER Group",
    company: "NCSR Demokritos – Institute of Informatics & Telecommunications",
    location: "Athens, Greece",
    period: "Jun 2024 – Sep 2025",
    bullets: [
      "Worked on EU-funded project ENEXA (Efficient Explainable Learning on Knowledge Graphs)",
      "Focused on knowledge graph consistency, reasoning, and large-scale data processing",
      "Applied machine learning and semantic technologies (RDF, SPARQL)",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-card">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="section-accent-bar" />

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-foreground font-body">{exp.title}</h3>
                <span className="text-sm text-accent font-medium whitespace-nowrap">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-accent">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
