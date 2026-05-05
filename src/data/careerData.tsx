import { FaGraduationCap, FaBuilding } from "react-icons/fa";
import { ReactNode } from "react";

export interface CareerItem {
  role: string;
  company: string;
  date: string | ReactNode;
  desc: string | ReactNode;
  brandColor: string;
  icon: ReactNode;
  isCurrentFocus?: boolean;
}

export const careerData: CareerItem[] = [
  {
    role: "Master of Business Administration",
    company: "IIM Shillong",
    date: "2025 – 2027",
    desc: (
      <>
        Pursuing MBA at IIM Shillong with focus areas in Analytics, Marketing, and Operations. Building expertise at the intersection of data-driven thinking and management decision-making, with a core interest in Strategy Consulting and Product Management.
        <br />
        <br />
        As an Associate Member of EcoBiz, the Sustainability and Business Club, took ownership of high-impact community initiatives. Organized a blood donation drive that drew 200+ participants, led a citywide river cleaning campaign across Shillong, and coordinated a student-led plantation drive resulting in 300+ plants being planted across the campus.
      </>
    ),
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
