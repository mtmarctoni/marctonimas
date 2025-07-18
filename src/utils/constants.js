import { EmailIcon, LinkedInIcon, GithubIcon } from "@/utils/icons";

export const MY_NAME = "Marc Antoni Mas";
export const MY_NAME_LOGO = "Marc Toni Mas";
export const MY_MTM = "MTM";
export const MY_LINKEDIN = "marctonimas";
export const MY_GITHUB = "mtmarctoni";
export const MY_TELEGRAM = "mtmarctoni";
export const MY_LOCATION = "Palma de Mallorca";
export const MY_PHONE = "+34 652 13 48 06";
export const MY_EMAIL = "marctonimas@outlook.es";
export const MY_DOMAIN = "marctonimas.com";
export const MY_WEB = `https://${MY_DOMAIN}`;
export const GITHUB_API_URL = `https://api.github.com/users/${MY_GITHUB}/repos?sort=updated&per_page=100`;

export const socialMediaLinks = [
  {
    name: "Email",
    Icon: EmailIcon,
    link: `mailto:${MY_EMAIL}`,
    username: MY_EMAIL,
  },
  {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    link: `https://linkedin.com/in/${MY_LINKEDIN}`,
    username: MY_NAME,
  },
  {
    name: "GitHub",
    Icon: GithubIcon,
    link: "https://instagram.com/perebarcelo",
    username: `@${MY_GITHUB}`,
  },
  // Easy to add more social media here
];
