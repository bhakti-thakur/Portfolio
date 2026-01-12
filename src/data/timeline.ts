export type TimelineIcon = "email" | "share";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: TimelineIcon;  // Keep as key like "email", "share"
  active: boolean;
}

export const timeline: TimelineItem[] = [
  {
    date: "Feb '25 - Sept '25",
    title: "MS Dynamics CRM & Power Platform Intern",
    description: "Hands-on experience customizing Dynamics 365 CRM using JavaScript, building model-driven Power Apps with Dataverse entities, views, business rules, and security roles. Automated workflows with Power Automate and BPFs, and contributed to reusable JS components and C# plugins for scalable CRM solutions.",
    icon: "email",
    active: true,
  },
  {
    date: "Feb '25 - Apr '25",
    title: "Software Development Intern",
    description: 'Experience developing interactive web applications using React.js and Firebase, integrating REST APIs for real-time data exchange, and building responsive UI components with Tailwind CSS. Collaborated in Agile sprints to deliver production-ready frontend features for internal and customer-facing applications.',
    icon: "share",
    active: false,
  },
];