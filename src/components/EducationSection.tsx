const education = [
  {
    degree: "PhD in Electrical & Computer Engineering",
    school: "Technical University of Crete (TUC)",
    location: "Chania, Greece",
    period: "Oct 2025 – Present",
    detail: "Research focus: Geostatistics, Statistical/Machine Learning, Stochastic processes and large-scale data modeling",
  },
  {
    degree: "MSc in Data Science",
    school: "NCSR Demokritos & University of Peloponnese",
    location: "Athens, Greece",
    period: "Oct 2023 – May 2025",
    detail: "Grade: 9.75/10 · Thesis: Restoring consistency in large-scale Knowledge Graphs",
  },
  {
    degree: "Integrated Master in Electrical & Computer Engineering",
    school: "Technical University of Crete (TUC)",
    location: "Chania, Greece",
    period: "Sep 2018 – Oct 2023",
    detail: "Grade: 9.37/10 · Thesis: Time-series Analysis using Machine Learning Methods",
  },
];

const EducationSection = () => {
  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="section-accent-bar" />

        <div className="space-y-0">
          {education.map((edu, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-foreground font-body">{edu.degree}</h3>
                <span className="text-sm text-accent font-medium whitespace-nowrap">{edu.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {edu.school} · {edu.location}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
