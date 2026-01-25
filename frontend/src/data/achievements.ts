export type AchievementType = "pdf" | "link" | "image";

export interface Achievement {
  title: string;
  description: string;
  type: AchievementType;
  proof: string;
}

export const achievements: Achievement[] = [
 {
  title: "Ask Questions and analyse content with Microsoft 365 Copilot",
  description:
    "Learned how to use Microsoft 365 Copilot to ask contextual questions, analyze documents, and extract actionable insights efficiently.",
  type: "pdf",
  proof: "/achievements/Ask Question MS.pdf"
},
{
  title: "Boost your productivity with Microsoft 365 Copilot",
  description:
    "Gained hands-on experience using Microsoft 365 Copilot to automate tasks, streamline workflows, and improve overall productivity.",
  type: "pdf",
  proof: "/achievements/Boost MS.pdf"
},
{
  title: "Create and draft with Microsoft 365 Copilot",
  description:
    "Explored how to generate, draft, and refine professional content using Microsoft 365 Copilot across multiple applications.",
  type: "pdf",
  proof: "/achievements/Create and Draft MS.pdf"
},
{
  title: "Edit and transform with Microsoft 365 Copilot",
  description:
    "Learned techniques to edit, rewrite, and transform existing content effectively using Microsoft 365 Copilot.",
  type: "pdf",
  proof: "/achievements/Edit and Transform MS.pdf"
},
{
  title: "Explore AI for All",
  description:
    "Developed a foundational understanding of artificial intelligence concepts and how AI can be applied responsibly across domains.",
  type: "pdf",
  proof: "/achievements/Explore AI for all.pdf"
},
{
  title: "Explore AI Basics",
  description:
    "Learned the core principles of artificial intelligence, including machine learning concepts and real-world AI applications.",
  type: "pdf",
  proof: "/achievements/Explore AI.pdf"
},
{
  title: "Explore Generative AI",
  description:
    "Gained insights into generative AI models, their capabilities, use cases, and impact on modern software solutions.",
  type: "pdf",
  proof: "/achievements/Explore Generative AI.pdf"
},
{
  title: "Explore internet search and beyond",
  description:
    "Understood how AI enhances internet search, information discovery, and intelligent data retrieval beyond traditional search engines.",
  type: "pdf",
  proof: "/achievements/Explore Internet.pdf"
},
{
  title: "Explore Responsible AI",
  description:
    "Learned the principles of responsible AI, including fairness, transparency, privacy, and ethical AI system design.",
  type: "pdf",
  proof: "/achievements/Explore responsible AI.pdf"
},
{
  title: "Get started with Microsoft 365 Copilot",
  description:
    "Acquired a practical introduction to Microsoft 365 Copilot, covering setup, features, and real-world usage scenarios.",
  type: "pdf",
  proof: "/achievements/Get Started MS.pdf"
},
{
  title: "Summarize and simplify information with Microsoft 365 Copilot",
  description:
    "Learned how to summarize complex documents and simplify information efficiently using Microsoft 365 Copilot.",
  type: "pdf",
  proof: "/achievements/Summarize MS Copilot.pdf"
}
];
