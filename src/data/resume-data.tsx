import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chris Buonocore",
  initials: "CB",
  location: "Boston, MA",
  locationLink: "https://www.google.com/maps/place/boston+ma",
  about:
    "Engineering Lead | Systems Builder | Automation Enthusiast",
  summary:
    "Passionate engineering leader with a track record of scaling web applications and building automated workflows. Currently focused on AI systems, financial tooling, and location-independent income streams. Experienced in Java, Python, Go, and TypeScript/React ecosystems.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4E03AQHaigKwxj8O7A/profile-displayphoto-shrink_800_800/0/1651705060341?e=1710979200&v=beta&t=0PvaSYt2798auikE33f_fIMXsZR6pJCqyj7ext4MNXg",
  personalWebsiteUrl: "https://cbuonocore.com",
  contact: {
    email: "chrisdistrict@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/cbonoz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chrisbuonocore/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/chrisbcore",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "UC Berkeley",
      degree: "Engineering Physics",
      start: "2011",
      end: "2013",
    },
    {
      school: "UCLA",
      degree: "Computer Science",
      start: "2015",
      end: "2016",
    },
  ],
  work: [
    {
      company: "HubSpot",
      location: "Boston, MA",
      title: "Engineering Lead",
      link: "https://hubspot.com",
      start: "11/2023",
      end: "Current",
      badges: ["Hybrid"],
      description: "Reporting, goals, and KPIs in the HubSpot platform.",
    },
    {
      company: "Stavvy",
      location: "Boston, MA",
      title: "Technology / Engineering Director",
      link: "https://stavvy.com",
      start: "10/2019",
      end: "8/2023",
      badges: ["Hybrid"],
      description:
        "Led implementation of core loan management and esigning platform, recruited and hired engineering team members, set up vendor/integration logs, configured data pipeline, performed FedRamp gap analysis.",
    },
    {
      company: "Drift",
      location: "Boston, MA",
      title: "Tech Lead (Manager)",
      link: "https://drift.com",
      start: "9/2018",
      end: "10/2019",
      badges: ["On Site"],
      description:
        "Led a technical team responsible for building third-party integrations and APIs, set up code and deployed new Java backend services, built key integrations to enterprise partners.",
    },
    {
      company: "Toast",
      location: "Boston, MA",
      link: "https://toasttab.com",
      title: "Software Engineer",
      badges: ["On Site"],
      start: "3/2017",
      end: "5/2018",
      description:
        "Engineer on the Android Platform team, implemented encryption and security protocols in Kotlin, added caching and menu performance optimizations.",
    },
    {
      company: "eHealth Research Lab",
      location: "Los Angeles, CA",
      title: "Lead Android Developer",
      link: "https://ehealth.ucla.edu/",
      badges: ["On Site"],
      start: "10/2015",
      end: "3/2017",
      description:
        "Main Developer on Android wearable and mobile app predicting real-time health risk levels, two publications in novel Asthma health applications.",
    },
    {
      company: "Google",
      location: "Mountain View, CA",
      title: "Graduate Student Software Engineer Intern",
      link: "https://google.com",
      badges: ["On Site"],
      start: "6/2016",
      end: "9/2016",
      description:
        "Extended an A/B test web monitoring platform used across apps like Youtube, Gmail, and several internal tools.",
    },
  ],
  skills: [
    "Java",
    "Python",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Go",
    "Kotlin",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Terraform",
    "FastAPI",
    "Spring",
    "AI/ML",
    "Automation",
  ],
  projects: [
    {
      title: "LandKoala",
      techStack: ["Next.js", "AI", "Real Estate", "Automation"],
      description:
        "Real estate analysis and land investment platform with AI-powered insights and automated workflows.",
      link: {
        label: "landkoala.com",
        href: "https://landkoala.com",
      },
    },
    {
      title: "BabyNaming.pro",
      techStack: ["Next.js", "OpenAI", "Cloudflare", "Full Stack"],
      description:
        "AI-powered baby name generator with semantic search and personalized recommendations.",
      link: {
        label: "babynaming.pro",
        href: "https://babynaming.pro",
      },
    },
    {
      title: "Open Source Contributions",
      techStack: ["Droidcon", "Elasticsearch", "Cosmos SDK"],
      description:
        "Contributor to Droidcon Android app (1000s of attendees), Elasticsearch, and Layer-2 crypto projects.",
      link: {
        label: "github.com/cbonoz",
        href: "https://github.com/cbonoz",
      },
    },
    {
      title: "Hackathon Wins",
      techStack: ["Devpost", "AT&T Prize 2018", "AI Platform"],
      description:
        "Winner of several prototyping contests including AT&T global prize on their AI platform Acumos.",
      link: {
        label: "devpost.com/cbonoz",
        href: "https://devpost.com/cbonoz",
      },
    },
  ],
} as const;
