export interface Connection {
  name: string;
  subtitle: string;
  link: string;
  icon: "email" | "linkedin" | "download" | "twitter";
}

export const connections: Connection[] = [
  {
    name: "Contact Form",
    subtitle: "Send a direct message",
    link: "john.doe@email.com",
    icon: "email"
  },
  {
    name: "LinkedIn Profile",
    subtitle: "Professional network",
    link: "https://www.linkedin.com/in/bhakti-thakur/",
    icon: "linkedin"
  },
  {
    name: "Download Resume",
    subtitle: "PDF Version 2026",
    link: "https://drive.google.com/file/d/1_pSd56a683yO2yBog7mR_zH2NoHw3Dj2/view?usp=sharing",
    icon: "download"
  },
  {
    name: "Twitter / X",
    subtitle: "Tech insights & updates",
    link: "@johndoe_dev",
    icon: "twitter"
  }
];