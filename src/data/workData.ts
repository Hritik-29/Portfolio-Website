export interface SectorDetail {
  name: string;
  badge: string;
  color: string;
  points: string[];
}

export interface ReskillingStat {
  label: string;
  value: number;
  color: string;
}

export interface FindingStat {
  label: string;
  value: string;
  color: string;
}

export interface FindingChartData {
  type: 'bar' | 'block' | 'compare';
  items: { label: string; value: string; height?: string; color: string; labelColor?: string }[];
}

export interface Finding {
  id: string;
  title: string;
  leftPanelBg: string;
  leftPanelTextColor: string;
  chart: FindingChartData;
  description: string;
  stats: FindingStat[];
  source: string;
}

export interface ProjectDetails {
  sectors: SectorDetail[];
  reskillingStats: ReskillingStat[];
  reskillingNote: string;
  skills: string[];
  methods: string[];
  findings?: Finding[];
}

export interface WorkItem {
  id: string;
  name: string;
  category: string;
  tools: string;
  description: string;
  image: string;
  link?: string;
  video?: string;
  details?: ProjectDetails;
}

export const workData: WorkItem[] = [
  {
    id: "managerial-readiness-ai",
    name: "Managerial Readiness and Organizational Reorientation in the AI Era",
    category: "Research Project",
    tools: "Research design, Human capital strategy, Cross-sector analysis, AI governance",
    description:
      "Most companies are deploying AI. Very few are building the managerial capability to use it well. This research examines where that gap shows up across sectors, leadership layers, and the workforce, and what it takes to close it.",
    image: "/images/placeholder.webp",
    details: {
      sectors: [
        {
          name: "Technology / IT",
          badge: "Advanced",
          color: "#e6f2ff", // light blue
          points: [
            "AI embedded in daily decisions",
            "Routine tasks compressing; higher-order roles expanding",
            "Governance frameworks still catching up"
          ]
        },
        {
          name: "Analytics / Banking",
          badge: "Progressive",
          color: "#eef8e6", // light green
          points: [
            "AI structured into some workflows, not all",
            "Junior-level roles under the most pressure",
            "Managers navigating human-AI handoffs"
          ]
        },
        {
          name: "Retail / Service",
          badge: "Early stage",
          color: "#fff1e6", // light orange
          points: [
            "AI confined to backend ops",
            "Frontline largely unaffected for now",
            "No formal reskilling underway yet"
          ]
        }
      ],
      reskillingStats: [
        { label: "Feel adequately trained", value: 36, color: "#ff4d4f" },
        { label: "Have proper AI tool access", value: 63, color: "#ffa940" },
        { label: "Orgs reskilled >5% of workforce", value: 56, color: "#ffa940" },
        { label: "Frontline feel guided by mgmt", value: 25, color: "#ff4d4f" }
      ],
      reskillingNote: "The bottleneck isn't employee willingness — it's that infrastructure and communication aren't keeping pace.",
      skills: [
        "Research design",
        "Human capital strategy",
        "Cross-sector analysis",
        "AI governance thinking",
        "Organizational behaviour",
        "Data storytelling"
      ],
      methods: [
        "Semi-structured interviews",
        "Thematic analysis",
        "AI-assisted analysis",
        "Secondary literature review",
        "Triangulation across 3 sources"
      ],
      findings: [
        {
          id: "FINDING 01",
          title: "Adoption is not transformation",
          leftPanelBg: "#eef8e6",
          leftPanelTextColor: "#2e7d32",
          chart: {
            type: 'bar',
            items: [
              { label: "Deploy AI", value: "78%", height: "78%", color: "#8bc34a" },
              { label: "Redesign work", value: "21%", height: "21%", color: "#8bc34a" },
              { label: "Fully mature", value: "1%", height: "5%", color: "#33691e" }
            ]
          },
          description: "Nearly every organization has AI running somewhere. What almost none have done is change how decisions get made, how workflows run, or who is accountable for outputs. The tool is there. The operating model is not.",
          stats: [
            { value: "78%", label: "use AI in some function", color: "#4caf50" },
            { value: "1%", label: "call it fully mature", color: "#f44336" },
            { value: "21%", label: "redesigned workflows", color: "#f44336" }
          ],
          source: "McKinsey Global AI Survey 2024"
        },
        {
          id: "FINDING 02",
          title: "People want to learn. No one is showing them how.",
          leftPanelBg: "#f4efff",
          leftPanelTextColor: "#4527a0",
          chart: {
            type: 'block',
            items: [
              { label: "With leadership", value: "82%", height: "82%", color: "#9575cd" },
              { label: "Without leadership", value: "41%", height: "41%", color: "#d1c4e9", labelColor: "#5e35b1" }
            ]
          },
          description: "When leaders actively support AI adoption, uptake doubles. When they do not, over half of employees quietly work around the gaps using unsanctioned tools. The friction is not resistance. It is absence of direction.",
          stats: [
            { value: "2x", label: "adoption rate with leadership support", color: "#5e35b1" },
            { value: "54%", label: "use shadow AI to fill the gap", color: "#f44336" },
            { value: "36%", label: "feel adequately trained", color: "#f44336" }
          ],
          source: "BCG Workforce Readiness Report 2024"
        },
        {
          id: "FINDING 03",
          title: "What gets replaced first is not the role, it is the task",
          leftPanelBg: "#fff3e0",
          leftPanelTextColor: "#d84315",
          chart: {
            type: 'compare',
            items: [
              { label: "Repetitive tasks", value: "Compressing", color: "#ffab91" },
              { label: "Judgment tasks", value: "Holding", color: "#80cbc4" }
            ]
          },
          description: "AI is not eliminating roles wholesale. It is steadily absorbing the tasks within roles that follow predictable patterns. What remains, and what is hardest to build through training, is judgment under uncertainty.",
          stats: [
            { value: "41%", label: "fear obsolescence within a decade", color: "#d84315" },
            { value: "44%", label: "of orgs reskilled under 5% of staff", color: "#d84315" }
          ],
          source: "BCG Future of Work 2024 · WEF Jobs Report 2023"
        }
      ]
    }
  },
  {
    id: "colgate-inner-circle",
    name: "Colgate Inner Circle — Semi-Finalist",
    category: "Case Competition",
    tools: "Case Analysis, Strategic Thinking, Data-backed Recommendations",
    description:
      "Advanced to the semi-final round of Colgate Inner Circle, recognized by judges for strategic thinking and analytical rigour in developing data-backed business recommendations under time pressure.",
    image: "/images/placeholder.webp",
  },
  {
    id: "bcg-virtual-strategy",
    name: "BCG Virtual Strategy Consulting",
    category: "BCG Experience",
    tools: "Issue Tree Structuring, Strategic Frameworks, Stakeholder Communication",
    description:
      "Completed BCG's Virtual Experience Program — applied advanced logic synthesis, structured problem decomposition, and strategic lateral thinking to real-world business cases. Developed consulting-grade frameworks for client recommendation delivery.",
    image: "/images/placeholder.webp",
  },
  {
    id: "sustainability-strategy",
    name: "Sustainability Strategy & Community Impact",
    category: "EcoBiz Club — IIM Shillong",
    tools: "Program Management, Stakeholder Coordination, Social Impact",
    description:
      "Spearheaded flagship sustainability initiatives as Associate Member of EcoBiz, IIM Shillong. Organized a blood donation drive (200+ participants) and led a citywide river-cleaning campaign across Shillong — driving measurable social and environmental impact at scale.",
    image: "/images/placeholder.webp",
  },
  {
    id: "alien-invader",
    name: "Alien Invader — Product Design & Delivery",
    category: "Personal Project",
    tools: "Python, Pygame, Agile, OOP, Scope Management",
    description:
      "Designed and shipped a complete 2D game in Python using Pygame. Defined feature scope, managed iterative sprints using agile frameworks, and engineered responsive mechanics with real-time score tracking. Full playable product delivered in 4 weeks.",
    image: "/images/placeholder.webp",
  },
  {
    id: "cloud-data-engineering",
    name: "Cloud & Data Engineering Stack",
    category: "Certifications",
    tools: "Azure, Snowflake, SQL, Python, Machine Learning",
    description:
      "Microsoft Azure Data Fundamentals, Snowflake Data Warehouse certified, HackerRank SQL (Intermediate), and IIT Kanpur EICT AI/ML certificate — validating cloud data warehousing, SQL optimization, and applied ML capabilities for data-driven product decisions.",
    image: "/images/placeholder.webp",
  },
];
