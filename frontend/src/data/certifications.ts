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
    title: "Python (Basic) Certification",
    provider: "HackerRank",
    issued: "2026",
    type: "pdf",
    proof: "/certifications/python_basic certificate.pdf"
  },
  {
    title: "Introduction to Linear Algebra with MATLAB",
    provider: "MATLAB Academy",
    issued: "2026",
    type: "link",
    proof: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=77f750e8-d73d-4fc6-8aea-4a7159c6b14f&"
  }
];
