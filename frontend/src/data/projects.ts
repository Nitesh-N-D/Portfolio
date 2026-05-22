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
  },
  {
  id: 4,
  title: "Arrakis Intelligence Platform",
  description:
    "An AI-powered behavioral intelligence platform that helps users master focus, reduce distractions, and accelerate skill development through real-time analytics, predictive insights, and personalized learning roadmaps.",
  role: "Founder • Full Stack Engineer • Product Designer",
  impact:
    "Engineered a production-ready SaaS platform featuring Google OAuth, JWT authentication, live Socket.io updates, predictive burnout analysis, distraction intelligence, roadmap automation, and cloud deployment.",
  recruiterSignal:
    "Showcases system architecture, full-stack development, real-time communication, authentication flows, analytics dashboards, database design, DevOps practices, and product ownership.",
  codeLabel: "spice-engine.service.ts",
  spotlightCode: `async function completeFocusSession(userId, duration) {
  const spiceEarned = duration === 50 ? 25 : 10;

  await User.findByIdAndUpdate(userId, {
    $inc: { spice: spiceEarned }
  });

  io.to(userId).emit("spice:update", {
    gained: spiceEarned
  });

  return spiceEarned;
}`,
  tech_stack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "Recharts",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.io",
    "Google OAuth",
    "JWT",
    "Docker",
    "Render",
    "Vercel"
  ],
  image: "/projects/arrakisintelligenceplatform.png",
  github: "https://github.com/Nitesh-N-D/Arrakis-Intelligence-Platform",
  live: "https://arrakis-intelligence-platform.vercel.app/",
  featured: true
},
{
  id: 5,
  title: "CarePath - AI-Powered Healthcare Management Platform",
  description:
    "A comprehensive healthcare platform that enables users to manage medical records, track health metrics, schedule appointments, receive medication reminders, access AI-assisted health insights, and maintain a secure digital health journal.",
  role: "Founder • Full Stack Developer • Product Architect",
  impact:
    "Built a production-ready healthcare ecosystem featuring secure authentication, AI-powered assistance, health record management, appointment scheduling, medication reminders, analytics dashboards, responsive UI, and cloud deployment.",
  recruiterSignal:
    "Demonstrates full-stack engineering, healthcare domain knowledge, secure authentication, REST API design, database architecture, AI integration, responsive frontend development, deployment workflows, and end-to-end product ownership.",
  codeLabel: "healthInsights.service.ts",
  spotlightCode: `async function generateHealthInsights(userId) {
  const records = await HealthRecord.find({ userId });

  const insights = await aiEngine.analyze({
    vitals: records,
    medications: await Medication.find({ userId })
  });

  io.to(userId).emit("health:insights", insights);

  return insights;
}`,
  tech_stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT Authentication",
    "Google OAuth",
    "Socket.io",
    "Cloudinary",
    "OpenAI API",
    "Render",
    "Vercel"
  ],
  image: "/projects/carepath.png",
  github: "https://github.com/Nitesh-N-D/CarePath",
  live: "https://care-path-two.vercel.app/",
  featured: true
},
{
  id: 6,
  title: "HostelHub - Smart Hostel Management System",
  description:
    "A full-stack hostel management platform that digitizes outpass approvals, complaint tracking, announcements, notifications, and student administration through a modern role-based web application.",
  role: "Founder • Full Stack Developer • Product Designer",
  impact:
    "Developed a production-ready hostel ecosystem featuring QR-enabled outpasses, PDF generation, complaint resolution workflows, announcement broadcasting, analytics dashboards, real-time notifications, and cloud deployment.",
  recruiterSignal:
    "Demonstrates MEAN stack expertise, authentication and authorization, RESTful API development, MongoDB schema design, PDF and QR code generation, real-time communication, dashboard analytics, deployment, and end-to-end product ownership.",
  codeLabel: "outpass.controller.ts",
  spotlightCode: `const outpass = await Outpass.create({
  student: req.user._id,
  fromDate,
  toDate,
  destination,
  reason,
  status: "Pending"
});

await notifyAdmins({
  title: "New Outpass Request",
  message: \`\${req.user.name} submitted an outpass request\`
});`,
  tech_stack: [
    "Angular",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "JWT Authentication",
    "Socket.io",
    "Tailwind CSS",
    "PDFKit",
    "QRCode",
    "Chart.js",
    "Render",
    "Vercel"
  ],
  image: "/projects/hostelhub.png",
  github: "https://github.com/Nitesh-N-D/HostelHub",
  live: "https://hostel-hub-gules.vercel.app/",
  featured: false
}
];
