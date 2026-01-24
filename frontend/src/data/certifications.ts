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
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    issued: "2024",
    type: "pdf",
    proof: "/certifications/aws-cloud-practitioner.pdf"
  },
  {
    title: "Java Programming",
    provider: "NPTEL",
    issued: "2023",
    type: "pdf",
    proof: "/certifications/nptel-java.pdf"
  },
  {
    title: "Google Cloud Fundamentals",
    provider: "Google",
    issued: "2024",
    type: "image",
    proof: "/certifications/google-cloud.png"
  },
  {
    title: "Git & GitHub",
    provider: "Coursera",
    issued: "2023",
    type: "link",
    proof: "https://coursera.org/verify/example"
  }
];
