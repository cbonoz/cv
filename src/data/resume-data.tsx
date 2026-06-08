import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chris Buonocore",
  initials: "CB",
  location: "Boston, MA",
  locationLink: "https://www.google.com/maps/place/boston+ma",
  about:
    "Engineering Lead at HubSpot · Building APIs for 300K+ Businesses",
  summary:
    "Engineering leader who builds API platforms and data infrastructure at scale. Previously managed two engineering managers as Director of Engineering at Stavvy, then moved to HubSpot as an Engineering Lead for the scale and technical impact — owning platform infrastructure processing billions of API calls per day. Daily user of AI coding tools (Claude Code, OpenCode, Hermes Agent via MCP). Experienced in Java, Python, Go, and TypeScript/React ecosystems.",
  avatarUrl: "/me.webp",
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
      degree: "BS Engineering Physics, 2013",
      start: "2011",
      end: "2013",
    },
    {
      school: "UCLA",
      degree: "MS Computer Science, 2017",
      start: "2015",
      end: "2017",
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
      description:
        "Lead a team in HubSpot's Reporting group, owning the platform powering marketing and sales analytics for 300K+ businesses. Built Kafka pipelines for real-time attribution tracking across the full customer journey. Drove Snowflake optimization cutting P50 query latencies by 50%. Migrated 300K+ legacy reports and implemented automated data lifecycle policies, reducing storage costs by 40%+.",
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
    "Kafka",
    "Snowflake",
    "FastAPI",
    "Spring",
    "AI Tooling (Claude Code, OpenCode, Hermes Agent, MCP)",
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
      title: "House Valuation",
      techStack: ["Python", "Machine Learning", "Acumos", "Redfin"],
      description:
        "Automated house price estimator combining Redfin data with ML models via Acumos platform.",
      link: {
        label: "github.com/cbonoz/acumos-house-valuations",
        href: "https://github.com/cbonoz/acumos-house-valuations",
      },
    },
    {
      title: "NFL Score Predictor",
      techStack: ["Python", "Machine Learning", "Sports Analytics"],
      description:
        "Score prediction model for NFL games based on historical data and team statistics.",
      link: {
        label: "github.com/cbonoz/nfl-score-predict",
        href: "https://github.com/cbonoz/nfl-score-predict",
      },
    },
    {
      title: "StampX",
      techStack: ["Solidity", "Web3", "AI Agents"],
      description:
        "Web3 loyalty program platform with AI agent-driven smart contract interactions.",
      link: {
        label: "github.com/cbonoz/agentic25",
        href: "https://github.com/cbonoz/agentic25",
      },
    },
    {
      title: "VirtalityTest",
      techStack: ["TypeScript", "Reddit", "Devvit", "Gaming"],
      description:
        "Reddit game for improving virality detection skills. Built with Devvit framework for Reddit's developer platform.",
      link: {
        label: "github.com/cbonoz/devvit25",
        href: "https://github.com/cbonoz/devvit25",
      },
    },
    {
      title: "TravelMink",
      techStack: ["TypeScript", "Next.js", "Tailwind", "Bun"],
      description: "AI-powered travel planning and assistant app.",
      link: {
        label: "travelmink.com",
        href: "https://travelmink.com"
      }
    },
    {
      title: "RentalEval",
      techStack: ["TypeScript", "Next.js", "Tailwind", "Bun"],
      description: "Tool for evaluating rental properties and market opportunities.",
      link: {
        label: "rental-eval.vercel.app",
        href: "https://rental-eval.vercel.app"
      }
    },
  ],
} as const;
