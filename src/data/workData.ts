export interface WorkItem {
  name: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  link?: string;
  video?: string;
}

export const workData: WorkItem[] = [
  {
    name: "Indo-Nepal Ultra Relay",
    category: "Kanpur Runners",
    tools: "Operations Management, Sponsorship Strategy, Cross-border Logistics",
    description:
      "Directed end-to-end logistics for a 720.60 km cross-border endurance relay across India and Nepal — securing strategic sponsorships, coordinating multi-team operations across two countries, and delivering an event that earned a place in both the Asia Book and India Book of Records.",
    image: "/images/placeholder.webp",
  },
  {
    name: "Colgate Inner Circle — Semi-Finalist",
    category: "Case Competition",
    tools: "Case Analysis, Strategic Thinking, Data-backed Recommendations",
    description:
      "Advanced to the semi-final round of Colgate Inner Circle, recognized by judges for strategic thinking and analytical rigour in developing data-backed business recommendations under time pressure.",
    image: "/images/placeholder.webp",
  },
  {
    name: "BCG Virtual Strategy Consulting",
    category: "BCG Experience",
    tools: "Issue Tree Structuring, Strategic Frameworks, Stakeholder Communication",
    description:
      "Completed BCG's Virtual Experience Program — applied advanced logic synthesis, structured problem decomposition, and strategic lateral thinking to real-world business cases. Developed consulting-grade frameworks for client recommendation delivery.",
    image: "/images/placeholder.webp",
  },
  {
    name: "Sustainability Strategy & Community Impact",
    category: "EcoBiz Club — IIM Shillong",
    tools: "Program Management, Stakeholder Coordination, Social Impact",
    description:
      "Spearheaded flagship sustainability initiatives as Associate Member of EcoBiz, IIM Shillong. Organized a blood donation drive (200+ participants) and led a citywide river-cleaning campaign across Shillong — driving measurable social and environmental impact at scale.",
    image: "/images/placeholder.webp",
  },
  {
    name: "Alien Invader — Product Design & Delivery",
    category: "Personal Project",
    tools: "Python, Pygame, Agile, OOP, Scope Management",
    description:
      "Designed and shipped a complete 2D game in Python using Pygame. Defined feature scope, managed iterative sprints using agile frameworks, and engineered responsive mechanics with real-time score tracking. Full playable product delivered in 4 weeks.",
    image: "/images/placeholder.webp",
  },
  {
    name: "Cloud & Data Engineering Stack",
    category: "Certifications",
    tools: "Azure, Snowflake, SQL, Python, Machine Learning",
    description:
      "Microsoft Azure Data Fundamentals, Snowflake Data Warehouse certified, HackerRank SQL (Intermediate), and IIT Kanpur EICT AI/ML certificate — validating cloud data warehousing, SQL optimization, and applied ML capabilities for data-driven product decisions.",
    image: "/images/placeholder.webp",
  },
];
