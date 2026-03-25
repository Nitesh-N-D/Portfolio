export type AchievementType = "pdf" | "link" | "image";

export interface Achievement {
  title: string;
  description: string;
  type: AchievementType;
  proof: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    title: "Lithos 2K26 - Technical Event Participation",
    description:
      "Participated in a competitive technical event focused on engineering problem solving, collaboration, and real-time decision making under delivery constraints.",
    type: "pdf",
    proof: "/achievements/Certificate Of Participation Lithos2k26.pdf",
    featured: true
  },
  {
    title: "Microsoft 365 Copilot - Content Analysis",
    description:
      "Practiced extracting structured insights from documents and using AI assistance to accelerate review, questioning, and synthesis workflows.",
    type: "pdf",
    proof: "/achievements/Ask Question MS.pdf"
  },
  {
    title: "Microsoft 365 Copilot - Productivity Workflows",
    description:
      "Explored applied productivity patterns using Copilot to reduce repetitive work and speed up routine knowledge tasks.",
    type: "pdf",
    proof: "/achievements/Boost MS.pdf"
  },
  {
    title: "Microsoft 365 Copilot - Drafting and Authoring",
    description:
      "Learned to generate and refine professional content more efficiently while keeping structure, tone, and clarity aligned with the task.",
    type: "pdf",
    proof: "/achievements/Create and Draft MS.pdf"
  },
  {
    title: "Microsoft 365 Copilot - Editing and Transformation",
    description:
      "Applied AI-assisted rewriting patterns to improve readability, simplify language, and restructure existing content for better communication.",
    type: "pdf",
    proof: "/achievements/Edit and Transform MS.pdf"
  },
  {
    title: "Explore AI for All",
    description:
      "Built baseline fluency in artificial intelligence concepts, applications, and responsible adoption across practical software scenarios.",
    type: "pdf",
    proof: "/achievements/Explore AI for all.pdf"
  },
  {
    title: "Explore AI Basics",
    description:
      "Strengthened understanding of core AI and machine learning principles relevant to modern product and software development.",
    type: "pdf",
    proof: "/achievements/Explore AI.pdf"
  },
  {
    title: "Explore Generative AI",
    description:
      "Studied generative AI capabilities, product use cases, and the implications of model-assisted workflows in engineering environments.",
    type: "pdf",
    proof: "/achievements/Explore Generative AI.pdf"
  },
  {
    title: "Explore Internet Search and Beyond",
    description:
      "Examined how AI-enhanced retrieval and search experiences improve information access beyond conventional keyword workflows.",
    type: "pdf",
    proof: "/achievements/Explore Internet.pdf"
  },
  {
    title: "Explore Responsible AI",
    description:
      "Focused on fairness, transparency, privacy, and accountability as core requirements for trustworthy AI-enabled systems.",
    type: "pdf",
    proof: "/achievements/Explore responsible AI.pdf"
  },
  {
    title: "Get Started with Microsoft 365 Copilot",
    description:
      "Built practical familiarity with Copilot setup, usage patterns, and task-oriented workflows across productivity tools.",
    type: "pdf",
    proof: "/achievements/Get Started MS.pdf"
  },
  {
    title: "Microsoft 365 Copilot - Summarization",
    description:
      "Used AI-assisted summarization techniques to condense longer documents into decision-ready takeaways without losing important context.",
    type: "pdf",
    proof: "/achievements/Summarize MS Copilot.pdf"
  }
];
