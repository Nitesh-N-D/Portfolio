export interface ProjectDetail {
  summary: string;
  challenge: string;
  delivery: string[];
  outcome: string;
}

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
  detail?: ProjectDetail;
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
    featured: true,
    detail: {
      summary:
        "SkillShare was built as a peer learning product focused on helping students discover relevant courses, share expertise, and collaborate in a cleaner and more guided way.",
      challenge:
        "The main challenge was designing an experience that balanced course discovery, learner engagement, and platform simplicity without making the product feel cluttered.",
      delivery: [
        "Built the frontend and backend flow for course discovery, enrollment, and collaboration.",
        "Structured the product so users could move from browsing to learning with minimal friction.",
        "Focused on a clear application flow that supports practical product usage instead of a demo-only experience."
      ],
      outcome:
        "This project demonstrates end-to-end product ownership, practical feature delivery, and the ability to ship a user-facing platform with real adoption potential."
    }
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
    featured: true,
    detail: {
      summary:
        "Campus Air is a broader campus communication system designed to keep students informed through events, announcements, media, and real-time interactions inside a single platform.",
      challenge:
        "The project required coordinating multiple moving parts such as authentication, real-time communication, media handling, and admin-to-student publishing workflows.",
      delivery: [
        "Implemented the full-stack workflow across interface, backend APIs, and deployment.",
        "Integrated real-time updates so announcements and events could reach the right audience immediately.",
        "Used a modern stack to support scalable communication patterns and smoother campus operations."
      ],
      outcome:
        "This project is a strong signal for system thinking because it combines product design, backend coordination, and live communication in one cohesive application."
    }
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
    live: "https://lost-found-system.vercel.app/",
    detail: {
      summary:
        "The Lost and Found Management System was designed to solve a practical campus problem by making it easier to report, search, and recover items with clear data handling.",
      challenge:
        "The core challenge was turning a simple CRUD problem into a trustworthy workflow where users could quickly understand item status and recovery progress.",
      delivery: [
        "Built the reporting and recovery flow with structured item records and image support.",
        "Connected the frontend experience with backend storage so item updates stayed organized and easy to follow.",
        "Kept the interface focused on clarity, which is critical for utility-driven applications."
      ],
      outcome:
        "This project shows practical engineering judgment, useful UX decisions, and the ability to build software that solves a direct real-world need."
    }
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
  featured: true,
  detail: {
    summary:
      "Arrakis Intelligence Platform is an AI-powered behavioral intelligence SaaS product focused on focus mastery, distraction reduction, and skill development through analytics and personalized roadmaps.",
    challenge:
      "The main challenge was connecting authentication, real-time updates, predictive insights, dashboards, and product workflows into one cohesive production-ready platform.",
    delivery: [
      "Engineered Google OAuth, JWT authentication, live Socket.io updates, and cloud deployment.",
      "Built predictive burnout analysis, distraction intelligence, roadmap automation, and analytics dashboards.",
      "Designed a polished SaaS experience that connects behavioral data with practical user action."
    ],
    outcome:
      "This project demonstrates system architecture, full-stack delivery, product ownership, real-time communication, analytics, and deployment discipline."
  }
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
  featured: true,
  detail: {
    summary:
      "CarePath is a healthcare management platform for records, health metrics, appointments, reminders, AI-assisted insights, and secure digital health journaling.",
    challenge:
      "The main challenge was organizing sensitive healthcare workflows into a secure, responsive, and easy-to-use full-stack application.",
    delivery: [
      "Built secure authentication, health record management, appointment scheduling, medication reminders, and analytics dashboards.",
      "Integrated AI-powered assistance and cloud media workflows into the healthcare experience.",
      "Delivered a responsive frontend backed by REST APIs, MongoDB data models, and cloud deployment."
    ],
    outcome:
      "This project demonstrates secure full-stack engineering, healthcare domain thinking, AI integration, database architecture, and end-to-end product ownership."
  }
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
  featured: false,
  detail: {
    summary:
      "HostelHub is a smart hostel management system that digitizes outpass approvals, complaint tracking, announcements, notifications, and student administration.",
    challenge:
      "The core challenge was replacing manual hostel workflows with role-based digital flows that stay fast, traceable, and practical for students and administrators.",
    delivery: [
      "Developed QR-enabled outpasses, PDF generation, complaint resolution workflows, announcements, and analytics dashboards.",
      "Implemented authentication, authorization, MongoDB schemas, REST APIs, and real-time notifications.",
      "Deployed a complete role-based hostel platform with a responsive frontend and cloud backend."
    ],
    outcome:
      "This project demonstrates MEAN stack delivery, workflow automation, real-time communication, document generation, analytics, and production deployment."
  }
},
{
id: 7,
title: "CodeWatch – AI-Powered Local Code Review Dashboard",
description:
"A privacy-first, self-hosted platform that continuously monitors local Git repositories, analyzes commit diffs with local LLMs via Ollama, and visualizes code quality insights through an interactive dashboard.",
role: "Founder • Full Stack Developer • AI Systems Engineer",
impact:
"Built an end-to-end local AI code review system featuring automated repository monitoring, commit diff analysis, severity-based issue detection, historical review tracking, and a modern analytics dashboard without exposing source code to external services.",
recruiterSignal:
"Demonstrates AI integration, developer tooling, Git automation, backend architecture, local-first system design, asynchronous job scheduling, data visualization, and full-stack product engineering.",
codeLabel: "review-engine.py",
spotlightCode: `for commit in repository.get_new_commits():
diff = git_service.extract_diff(commit)


review = ollama.analyze(
    model="deepseek-coder:6.7b",
    prompt=build_review_prompt(diff)
)

database.save_review(commit.hash, review)
websocket.broadcast("review:completed", review)`,
tech_stack: [
"FastAPI",
"Python",
"SQLite",
"SQLAlchemy",
"GitPython",
"APScheduler",
"Ollama",
"DeepSeek-Coder",
"Docker"
],
image: "/projects/codewatch.png",
github: "https://github.com/Nitesh-N-D/CodeWatch",
featured:false,
detail: {
summary:
"CodeWatch is a privacy-first AI code review platform that continuously scans local Git repositories, analyzes commit diffs using locally hosted language models through Ollama, and presents actionable engineering insights in a modern web dashboard.",
challenge:
  "The primary challenge was building an automated review pipeline capable of monitoring repositories, extracting meaningful code changes, coordinating local AI inference, and presenting historical quality metrics without relying on cloud-based services.",
delivery: [
  "Implemented continuous repository monitoring with automated commit detection and scheduled scanning.",
  "Integrated Ollama-powered local LLM analysis to generate severity-based code reviews, maintainability recommendations, and security observations.",
  "Designed a React dashboard with repository overviews, activity feeds, issue statistics, trend visualization, review history, and diff inspection.",
  "Built the platform with a local-first architecture using FastAPI, SQLite, GitPython, and asynchronous background jobs to ensure complete source code privacy."
],
outcome:
  "The project demonstrates expertise in AI-assisted developer tools, Git automation, full-stack architecture, local LLM integration, asynchronous processing, analytics visualization, and privacy-preserving software engineering."
}
}
];
