export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  impact?: string;
  recruiterSignal: string;
  codeLabel: string;
  spotlightCode: string;
  tech_stack: string[];
  image: string;
  github: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SkillShare Platform",
    description:
      "A peer-to-peer learning platform where users can share skills, enroll in courses, and collaborate.",
    role: "Full Stack Developer",
    impact: "Used by 500+ students.",
    recruiterSignal: "Highlights end-to-end product delivery, user flows, and feature ownership.",
    codeLabel: "matching-recommendation.ts",
    spotlightCode: `const recommendations = courses
  .filter(course => course.skillLevel <= learner.level)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);`,
    tech_stack: ["React", "Node.js", "Firebase", "Express"],
    image: "/projects/skillshare.png",
    github: "https://github.com/Nitesh-N-D/SKILL-SHARE_REPO",
    live: "https://student-helpdesk-f4987.web.app/",
    featured: true
  },
  {
    id: 2,
    title: "Campus Air - Smart Campus Communication Platform",
    description:
      "A full-stack campus management platform that enables administrators to publish events, announcements, and real-time updates for students.",
    role: "Full Stack Development (Frontend, Backend, Deployment)",
    recruiterSignal: "Shows system design range with auth, media handling, and live communication.",
    codeLabel: "notifications.gateway.ts",
    spotlightCode: `io.on("connection", socket => {
  socket.on("announcement:publish", payload => {
    io.to(payload.audience).emit("announcement:live", payload);
  });
});`,
    tech_stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "Cloudinary",
      "Google OAuth"
    ],
    image: "/projects/campusair.png",
    github: "https://github.com/Nitesh-N-D/Campus-Air",
    live: "https://campus-air.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "Lost & Found Management System",
    description:
      "Campus-based system to report, track, and recover lost items with image uploads.",
    role: "Frontend & Database Integration",
    recruiterSignal: "Communicates practical CRUD delivery with useful UX and structured data flows.",
    codeLabel: "claims.controller.ts",
    spotlightCode: `const item = await Item.findById(itemId);
if (!item || item.status === "claimed") {
  throw new Error("Item is no longer available");
}
await item.updateOne({ status: "claimed", claimedBy: userId });`,
    tech_stack: ["React", "Node.js", "MongoDB", "Express"],
    image: "/projects/lostfound.png",
    github: "https://github.com/Nitesh-N-D/Lost-Found-System",
    live: "https://lost-found-system.vercel.app/"
  }
];
