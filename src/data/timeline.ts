export type TimelineIcon = "email" | "share";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: TimelineIcon;
  active: boolean;
}

export const timeline: TimelineItem[] = [
  {
    date: "Dec 12, 2023 2:45 PM",
    title: "Email sent to Potential Client",
    description: "Follow-up regarding full-stack developer position for the upcoming SaaS project.",
    icon: "email",
    active: true,
  },
  {
    date: "Nov 28, 2023 10:15 AM",
    title: "LinkedIn Profile Updated",
    description: 'Added "Senior Power Platform Developer" certification to the professional summary.',
    icon: "share",
    active: false,
  },
];