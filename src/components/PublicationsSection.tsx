import { FileText, Presentation } from "lucide-react";

const publications = [
  {
    title: "Prediction of Yearly Mean Sunspot Number using Machine Learning Methods",
    authors: "Paraskakis, N., & Hristopulos, D. T.",
    venue: "Stochastic Environmental Research and Risk Assessment, 2025",
    type: "journal" as const,
  },
  {
    title: "Simplifying Smart Readiness: A Novel Tool for Rapid SRI Assessment in European Buildings",
    authors: "Afxentiou, N., Douni, O., Paraskakis, N., & Fokaides, P. A.",
    venue: "International Multidisciplinary Conference on Computer and Energy Science (SpliTech), IEEE, 2024",
    type: "conference" as const,
  },
];

const presentations = [
  {
    title: "Modeling the Number of Sunspots using Machine Learning",
    venue: "Poster presentation at SigmaPhi 2023 (International Conference on Statistical Physics)",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="bg-card">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        <div className="section-accent-bar" />

        <div className="space-y-6 mb-12">
          {publications.map((pub, i) => (
            <div key={i} className="flex gap-4">
              <FileText size={20} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-foreground font-body leading-snug">{pub.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pub.authors}</p>
                <p className="text-sm text-muted-foreground italic">{pub.venue}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground font-display mb-4">Presentations</h3>
        {presentations.map((pres, i) => (
          <div key={i} className="flex gap-4">
            <Presentation size={20} className="text-accent mt-1 shrink-0" />
            <div>
              <h4 className="text-base font-semibold text-foreground font-body leading-snug">{pres.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{pres.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
