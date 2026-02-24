// export const projects = [
//   {
//     id: 1,
//     title: "SkillShare Platform",
//     description:
//       "A peer-to-peer learning platform where users can share skills, enroll in courses, and collaborate.",
//     tech_stack: ["React", "Node.js", "MongoDB"],
//     image: "/projects/skillshare.png",
//     github: "https://github.com/Nitesh-N-D/SKILL-SHARE_REPO",
//     live: "https://student-helpdesk-f4987.web.app/"
//   },
//   {
//     id: 2,
//     title: "Lost & Found System",
//     description:
//       "Campus-based system to report, track, and recover lost items with image uploads.",
//     tech_stack: ["React", "Firebase"],
//     image: "/projects/lostfound.png",
//     github: "https://github.com/Nitesh-N-D/Lost-Found-System",
//     live: "https://lost-found-system.vercel.app/"
//   }
// ];
export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  impact?: string;
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
    tech_stack: ["React", "Node.js", "Firebase", "Express"],
    image: "/projects/skillshare.png",
    github: "https://github.com/Nitesh-N-D/SKILL-SHARE_REPO",
    live: "https://student-helpdesk-f4987.web.app/",
    featured: true
  },
  {
    id: 2,
    title: "Lost & Found Management System",
    description:
      "Campus-based system to report, track, and recover lost items with image uploads.",
    role: "Frontend & Database Integration",
    tech_stack: ["React", "Node.js","MongoDB", "Express"],
    image: "/projects/lostfound.png",
    github: "https://github.com/Nitesh-N-D/Lost-Found-System",
    live: "https://lost-found-system.vercel.app/"
  }
];
