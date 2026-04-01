const projects = [
  {
    title: "Knowledge Graph Consistency Restoration",
    subtitle: "MSc Thesis",
    bullets: [
      "Developed methods for restoring consistency in large-scale knowledge graphs",
      "Processed and analyzed RDF data using SPARQL and reasoning techniques, leveraging Apache Spark and Hadoop",
    ],
  },
  {
    title: "Time-Series Analysis using Machine Learning",
    subtitle: "Diploma Thesis",
    bullets: [
      "Developed predictive models for time-series data using machine learning techniques",
      "Analyzed and predicted the yearly mean sunspot number time series",
    ],
  },
  {
    title: "Academic & Engineering Projects",
    subtitle: "",
    bullets: [
      "Implemented systems in Java, C, Python, MATLAB across OS, databases, ML, and optimization",
      "Designed a compiler using Bison and Flex; developed CPU architecture in VHDL",
      "Built graphics applications with Unity and C#",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="section-accent-bar" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground font-body mb-1">{proj.title}</h3>
              {proj.subtitle && (
                <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded mb-3">
                  {proj.subtitle}
                </span>
              )}
              <ul className="space-y-1.5 mt-2">
                {proj.bullets.map((b, j) => (
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

export default ProjectsSection;
