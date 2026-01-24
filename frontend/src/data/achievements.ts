export type AchievementType = "pdf" | "link" | "image";

export interface Achievement {
  title: string;
  description: string;
  type: AchievementType;
  proof: string;
}

export const achievements: Achievement[] = [
  {
    title: "Finalist — National Level Hackathon",
    description:
      "Selected among top teams nationwide for building an AI-powered web platform.",
    type: "pdf",
    proof: "/achievements/hackathon-finalist.pdf"
  },
  {
    title: "Winner — College Innovation Challenge",
    description:
      "Built a full-stack healthcare system adopted by 500+ students.",
    type: "pdf",
    proof: "/achievements/innovation-award.pdf"
  },
  {
    title: "Open Source Contributor",
    description:
      "Contributed production-ready features and bug fixes to GitHub open-source projects.",
    type: "link",
    proof: "https://github.com/Nitesh-N-D"
  },
  {
    title: "Technical Lead — Student Developer Club",
    description:
      "Led a team of 10+ developers delivering real-world campus solutions.",
    type: "image",
    proof: "/achievements/club-leadership.png"
  }
];
