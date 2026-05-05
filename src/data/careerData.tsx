import { FaGraduationCap, FaBuilding } from "react-icons/fa";
import { ReactNode } from "react";

export interface CareerItem {
  role: string;
  company: string;
  date: string | ReactNode;
  desc: string;
  brandColor: string;
  icon: ReactNode;
  isCurrentFocus?: boolean;
}

export const careerData: CareerItem[] = [
  {
    role: "Master of Business Administration",
    company: "IIM Shillong",
    date: "2025 – 2027",
    desc: "Enrolled at one of India's top 20 business schools to bridge a gap between technical execution and strategic leadership. Amid a cohort of high-achieving professionals, I took on the challenge of pivoting from analytics delivery to business problem-solving — pursuing specialisations in Strategy, Marketing, and Operations while actively competing in case championships to sharpen structured thinking under pressure.\n\nAs an active member of EcoBiz (Sustainability & Business Club), I engage in real-world business discussions and cross-functional collaboration. I am now channelling these experiences toward securing roles in Strategy Consulting and Product Management.",
    brandColor: "rgba(255, 215, 0, 0.15)",
    icon: <FaGraduationCap style={{ color: "#ffd700" }} />,
    isCurrentFocus: true,
  },
  {
    role: "Senior Systems Associate – Analytics",
    company: "Infosys Limited",
    date: (
      <>
        Apr 2023 <br />– Dec 2023
      </>
    ),
    desc: "Led end-to-end analytics transformation for enterprise clients — architecting data validation frameworks (−30% errors), deploying real-time KPI dashboards (−40% turnaround), and driving agile sprint cycles. Led cross-functional knowledge transfer, distilling technical concepts for non-technical stakeholders.",
    brandColor: "rgba(0, 116, 204, 0.15)",
    icon: <FaBuilding style={{ color: "#0074cc" }} />,
  },
  {
    role: "Systems Associate – Analytics",
    company: "Infosys Limited",
    date: (
      <>
        Oct 2021 <br />– Mar 2023
      </>
    ),
    desc: "Built business intelligence solutions for Cummins (Fortune 500) financial accounts using OBIEE and Teradata. Engineered SQL optimizations (+30% system performance), standardized SOPs company-wide, and coordinated issue resolution across 3 cross-functional teams managing 20+ daily tasks.",
    brandColor: "rgba(0, 116, 204, 0.15)",
    icon: <FaBuilding style={{ color: "#0074cc" }} />,
  },
  {
    role: "Bachelor of Computer Applications",
    company: "CSJMU Kanpur",
    date: "2018 – 2021",
    desc: "Graduated with a focus in Computer Science — building technical foundations in data structures, programming, and systems design that underpin my analytics and product thinking today.",
    brandColor: "rgba(16, 185, 129, 0.15)",
    icon: <FaGraduationCap style={{ color: "#10b981" }} />,
  },
];
