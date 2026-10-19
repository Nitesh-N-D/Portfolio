export type CertificationType = "pdf" | "link" | "image";

export interface Certification {
  title: string;
  provider: string;
  issued: string;
  type: CertificationType;
  proof: string;
}

export const certifications: Certification[] = [
  {
    title: "Python for Data Science",
    provider: "NPTEL",
    issued: "2026",
    type: "pdf",
    proof: "/certifications/pythonfords_nptel.pdf"
  },
  {
    title: "Python (Basic) Certification",
    provider: "HackerRank",
    issued: "2026",
    type: "pdf",
    proof: "/certifications/python_basic certificate.pdf"
  },
  {
    title: "MATLAB Onramp",
    provider: "MATLAB Academy",
    issued: "2026",
    type: "link",
    proof: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=570452e2-a4eb-4980-82d4-38ba2712acdc&"
  },
  {
    title: "Introduction to Linear Algebra with MATLAB",
    provider: "MATLAB Academy",
    issued: "2026",
    type: "link",
    proof: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=77f750e8-d73d-4fc6-8aea-4a7159c6b14f&"
  }
];
