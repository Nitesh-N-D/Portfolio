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
  title: "CollabCode – Real-Time Classroom Coding Intelligence Platform",
  description:
    "A production-ready classroom coding intelligence platform enabling instructors to monitor live coding sessions, detect struggling students, provide private assistance, replay classroom activity, and manage multiple classrooms through a VS Code extension, instructor dashboard, and student portal.",
  role:
    "Founder • Full Stack Engineer • Product Architect",
  impact:
    "Designed and deployed a complete educational SaaS ecosystem including a VS Code Marketplace extension, instructor dashboard, student portal, Express backend, Supabase authentication, Socket.IO real-time collaboration, AI-assisted hints, and cloud deployment.",
  recruiterSignal:
    "Demonstrates large-scale full-stack engineering, distributed systems, real-time communication, VS Code extension development, SaaS architecture, authentication, cloud deployment, AI integration, and complete product ownership.",
  codeLabel:
    "liveSession.gateway.ts",
  spotlightCode: `io.on("connection", socket => {
  socket.on("student:update", payload => {
    io.to(payload.roomCode).emit("student:progress", payload);
  });

  socket.on("help:request", request => {
    io.to(request.instructorId).emit("help:new", request);
  });
});`,
  tech_stack: [
    "React",
    "TypeScript",
    "Vite",
    "Node.js",
    "Express",
    "Socket.IO",
    "Supabase",
    "PostgreSQL",
    "Google OAuth",
    "VS Code Extension API",
    "Gemini AI",
    "Render",
    "Vercel",
    "Docker"
  ],
  image: "/projects/collabcode.png",
  github:
    "https://github.com/Nitesh-N-D/CollabCode",
  live:
    "https://collabcode-dashboard.vercel.app/",
  featured: true,
  detail: {
    summary:
      "CollabCode is a production-ready educational platform built to improve programming classrooms through live coding intelligence. It combines an instructor dashboard, student portal, backend services, AI-powered assistance, and a Visual Studio Code extension into one integrated ecosystem.",
    challenge:
      "The project required coordinating multiple distributed applications while maintaining secure authentication, real-time communication, classroom ownership, session persistence, AI integration, and scalable deployment.",
    delivery: [
      "Developed a real-time instructor dashboard with classroom analytics, replay, student monitoring, and intervention tools.",
      "Built a student portal with secure classroom joining using Supabase authentication and Google OAuth.",
      "Engineered a Visual Studio Code Marketplace extension enabling students to join classrooms, request help privately, and synchronize coding activity.",
      "Designed an Express and Socket.IO backend supporting concurrent classrooms, live collaboration, AI-assisted hints, and session persistence.",
      "Deployed the complete platform using Vercel, Render, Supabase, and Docker while integrating Google OAuth and marketplace distribution."
    ],
    outcome:
      "CollabCode demonstrates advanced full-stack engineering, distributed system architecture, VS Code extension development, cloud deployment, AI integration, real-time collaboration, authentication workflows, and complete product ownership from design through production deployment."
  }
},
  {
    id: 2,
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
    id: 3,
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
  id: 4,
  title: "Talkarox – AI-Powered School Communication Platform",
  description:
    "A production-ready communication platform built for schools that enables secure messaging, announcements, appointments, AI assistance, and real-time collaboration between teachers, parents, students, and administrators without exposing personal phone numbers.",
  role:
    "Founder • Full Stack Engineer • Product Architect",
  impact:
    "Designed, developed, and deployed a complete SaaS communication platform featuring JWT authentication, Google OAuth, PostgreSQL, Supabase, Socket.IO, Firebase notifications, AI-powered messaging, cloud deployment, and responsive dashboards for every school role.",
  recruiterSignal:
    "Demonstrates enterprise-level full-stack engineering, scalable REST APIs, PostgreSQL database design, secure authentication, AI integration, real-time communication, cloud deployment, responsive UI development, and complete product ownership.",
  codeLabel:
    "messages.gateway.ts",
  spotlightCode: `io.on("connection", socket => {
  socket.on("conversation:join", room => {
    socket.join(room);
  });

  socket.on("message:send", async message => {
    await saveMessage(message);

    io.to(message.room).emit(
      "message:new",
      message
    );
  });

  socket.on("typing:start", room => {
    socket.to(room).emit("typing");
  });
});`,
  tech_stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Supabase",
    "Socket.IO",
    "Firebase Cloud Messaging",
    "JWT",
    "Google OAuth",
    "Cloudinary",
    "Brevo",
    "Gemini AI",
    "Render",
    "Vercel"
  ],
  image: "/projects/talkarox.png",
  github:
    "https://github.com/Nitesh-N-D/Talkarox",
  live:
    "https://talkarox.vercel.app/",
  featured: true,
  detail: {
    summary:
      "Talkarox is a production-ready AI-powered communication platform designed specifically for schools. It enables teachers, parents, students, and administrators to communicate securely through organized conversations, announcements, appointments, AI-powered assistance, collaborative tools, and real-time messaging while eliminating the need to share personal phone numbers.",
    challenge:
      "The primary challenge was designing a scalable communication ecosystem that combines secure authentication, real-time messaging, AI capabilities, notifications, appointment scheduling, role-based permissions, cloud deployment, and responsive user experiences into one cohesive SaaS platform.",
    delivery: [
      "Built a complete role-based communication platform supporting administrators, teachers, parents, and students.",
      "Implemented secure JWT authentication, Google OAuth, refresh tokens, email verification, password reset, and profile management.",
      "Developed real-time messaging with Socket.IO including online presence, typing indicators, conversation management, and instant notifications.",
      "Integrated AI-powered message categorization, translation, announcement management, collaborative whiteboard, appointment scheduling, and Firebase push notifications.",
      "Designed a PostgreSQL database architecture with Supabase, built scalable Express REST APIs, and deployed the production platform using Render and Vercel."
    ],
    outcome:
      "Talkarox demonstrates enterprise-grade SaaS architecture, full-stack engineering, PostgreSQL database design, secure authentication workflows, AI integration, real-time communication, cloud deployment, responsive frontend development, and complete ownership from product design through production release."
  }
},
{
  id: 5,
  title: "ClinicQueue – Smart Real-Time Clinic Queue Management Platform",
  description:
    "A production-ready healthcare queue management platform that enables patients to join clinic queues through the web or SMS, receive intelligent wait-time predictions, and allows healthcare staff to manage appointments, walk-ins, and patient flow through a secure real-time dashboard.",
  role:
    "Founder • Full Stack Engineer • Product Architect",
  impact:
    "Designed, developed, and deployed a complete healthcare SaaS platform featuring Google Authentication, Supabase, Socket.IO real-time synchronization, multilingual support, ML-powered wait-time prediction, Twilio SMS integration, responsive dashboards, and cloud deployment.",
  recruiterSignal:
    "Demonstrates healthcare software engineering, full-stack architecture, real-time communication, authentication, database design, cloud deployment, multilingual applications, REST API development, and complete product ownership.",
  codeLabel:
    "queue.gateway.ts",
  spotlightCode: `io.on("connection", socket => {
  socket.on("patient:join", payload => {
    queue.addPatient(payload);

    io.to(payload.clinicId).emit(
      "queue:update",
      queue.getState(payload.clinicId)
    );
  });

  socket.on("staff:callNext", clinicId => {
    const patient = queue.callNext(clinicId);

    io.to(clinicId).emit(
      "patient:called",
      patient
    );
  });
});`,
  tech_stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Socket.IO",
    "Supabase",
    "PostgreSQL",
    "Google OAuth",
    "Twilio",
    "Framer Motion",
    "Render",
    "Vercel"
  ],
  image: "/projects/clinicqueue.png",
  github:
    "https://github.com/Nitesh-N-D/ClinicQueue",
  live:
    "https://clinic-queue-opal.vercel.app/",
  featured: true,
  detail: {
    summary:
      "ClinicQueue is a production-ready healthcare queue management platform built for walk-in clinics and community health centers. It enables patients to join queues via web or SMS, provides intelligent wait-time prediction, supports multilingual communication, and allows staff to manage patient flow through a secure real-time dashboard.",
    challenge:
      "The primary challenge was building a scalable healthcare workflow that combines real-time synchronization, secure authentication, multilingual communication, SMS notifications, intelligent wait-time estimation, and responsive interfaces while remaining simple enough for both patients and healthcare staff.",
    delivery: [
      "Built a complete patient queue management workflow supporting web-based registration, SMS integration, multilingual interfaces, and real-time queue tracking.",
      "Implemented secure Google Authentication alongside PIN-based staff access using Supabase Authentication and role-based authorization.",
      "Developed Socket.IO-powered real-time synchronization between patient devices, staff dashboards, and waiting room display boards.",
      "Integrated ML-based wait-time prediction, Twilio SMS notifications, responsive dashboards, and cloud deployment using Render, Vercel, and Supabase.",
      "Designed a production-ready healthcare SaaS architecture focused on accessibility, low-cost deployment, and practical clinical workflows."
    ],
    outcome:
      "ClinicQueue demonstrates production-grade healthcare software engineering, full-stack architecture, real-time communication, authentication workflows, multilingual application development, cloud deployment, intelligent wait-time prediction, and complete product ownership from concept through deployment."
  }
},
  {
    id: 5,
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
  id: 6,
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
  id: 7,
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
  id: 8,
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
id: 9,
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
