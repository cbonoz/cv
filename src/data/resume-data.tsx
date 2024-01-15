import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chris Buonocore",
  initials: "CB",
  location: "Boston, MA",
  locationLink: "https://www.google.com/maps/place/boston+ma",
  about:
    "Experienced Engineer | Application Builder | Problem Solver.  My career focus is leading engineering teams using any mix of Java, Python, Go, and JavaScript/TypeScript (React/NextJS/NodeJS).",
  summary:
    "Passionate engineering leader with a track record of scaling web applications to tackle cutting-edge challenges. With years of experience in enterprise and start-up environments, I enjoy working in fast-paced and dynamic teams, leveraging my expertise in engineering leadership, project management software, and building cloud SaaS applications on AWS.",
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
        "Led implementation of core loan management and esigning platform, recruited and hired engineering team members, set up vendor/integration logs, configured data pipeline, performed FedRamp gap analysis, co-reviewed eSign engine.",
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
        "Led a technical team responsible for building third-party integrations and APIs, completed team 1:1’s and coaching, set up code and deployed new Java backend services, built key integrations to enterprise partners.",
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
        "Engineer on the Android Platform team, triaged customer-facing issues, implemented encryption and security protocols in Kotlin, upgraded and incorporated Java/Kotlin libraries, added caching and menu performance optimizations.",
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
        "Main Developer on Android wearable and mobile app predicting real-time health risk levels, two publications in novel Asthma health applications, associated with app development methods.",
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
    {
      company: "HackerRank",
      location: "Bay Area, CA",
      title: "Technical Solutions Engineer",
      link: "https://hackerrank.com",
      badges: ["On Site"],
      start: "10/2014",
      end: "10/2015",
      description:
        "Led or co-led customer-facing presentations, extended functionality of internal Chrome extensions using javascript/jquery.",
    },
    {
      company: "Oracle",
      location: "Bay Area, CA",
      title: "Technical Solutions Engineer",
      badges: ["On Site"],
      start: "6/2013",
      link: "https://oracle.com",
      end: "10/2014",
      description:
        "Led or co-led customer-facing presentations, extended functionality of internal Chrome extensions using javascript/jquery.",
    },
  ],
  skills: [
    "Java",
    "Python",
    "React/Typescript",
    "NodeJS",
    "Kotlin",
    "Go",
    "SQL (Postgres/MySQL)",
    "Bash scripting",
    "Spring",
    "Android",
    "Dropwizard",
    "FastAPI",
    "Gin",
    "Docker",
    "Terraform",
    "CICD",
    "Serverless/Lambda",
  ],
  projects: [
    {
      title: "Contributor to open source projects",
      techStack: [
        "Droidcon Android application",
        "Elasticsearch",
        "Layer-2 crypto projects like Cosmos",
      ],
      description:
        "Contributor to open source projects such as the Droidcon Android application (1000’s of attendees), Elasticsearch, and Layer-2 crypto projects like Cosmos.",
      // logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/cbonoz",
      },
    },
    {
      title: "Built a hosted app babynaming.pro",
      techStack: ["Full stack", "NextJS", "Integration with OpenAI"],
      description:
        "Built a hosted app babynaming.pro (full stack / NextJS) that integrates OpenAI. Deployed on Cloudflare/AWS.",
      link: {
        label: "babynaming.pro",
        href: "https://babynaming.pro",
      },
    },
    {
      title: "Hosted and shipped four Android mobile applications",
      techStack: ["Android", "Mobile development"],
      description:
        "Hosted and shipped four Android mobile applications to production, one getting over 10k downloads internationally.",
    },
    {
      title: "Winner of several prototyping and web contests",
      techStack: ["Devpost", "AT&T global prize in 2018", "AI platform Acumos"],
      description:
        "Winner of several prototyping and web contests on Devpost https://devpost.com/cbonoz, including an AT&T global prize in 2018 piloted on their AI platform Acumos.",
      link: {
        label: "devpost.com",
        href: "https://devpost.com/cbonoz",
      },
    },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
  ],
} as const;
