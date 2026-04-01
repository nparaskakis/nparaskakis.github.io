const skillGroups = [
  { label: "Languages", items: ["C", "C#", "Java", "Python", "MATLAB", "JavaScript", "Prolog", "VHDL"] },
  { label: "Databases", items: ["SQL", "MongoDB", "Neo4j", "SPARQL"] },
  { label: "ML / Data", items: ["PyTorch", "scikit-learn", "GPyTorch", "Apache Spark", "Hadoop"] },
  { label: "Tools", items: ["LaTeX", "JupyterLab", "IntelliJ IDEA", "VS Code", "Git"] },
  { label: "Core Knowledge", items: ["Linear Algebra", "Optimization", "Probability", "Statistics", "Pattern Recognition"] },
  { label: "Languages (spoken)", items: ["Greek (Native)", "English (C2)", "German (B2)"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-card">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="section-accent-bar" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3 font-body">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
