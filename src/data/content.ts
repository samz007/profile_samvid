export type ExternalLink = {
  label: string;
  url: string;
  type: "product" | "social" | "contact" | "verification" | "mentorship";
  status: "public" | "pending" | "private" | "available_on_request";
  description: string;
};

export type ProjectStatus =
  | "Active"
  | "Building"
  | "Researching"
  | "Planned"
  | "Paused"
  | "Archived";

export type ProjectType =
  | "Public Product"
  | "Tool"
  | "Experiment"
  | "Open Source"
  | "Writing Project"
  | "Community Project";

export type Project = {
  title: string;
  slug: string;
  status: ProjectStatus;
  type: ProjectType;
  shortDescription: string;
  longDescription: string;
  focusTags: string[];
  year: string;
  externalUrl: string;
  githubUrl: string;
  notesUrl: string;
  feedbackUrl: string;
  isFeatured: boolean;
  visibility: "public" | "coming_soon" | "private";
  metrics: string[];
  links: ExternalLink[];
};

export const site = {
  name: "Samvid Zare",
  location: "Seattle, WA",
  siteUrl: "https://portfolio-website-blue-xi-83.vercel.app",
  title: "Samvid Zare | Public Products, AI Systems & Career Access",
  description:
    "Samvid Zare builds public products around career access, AI-assisted development, mentorship, and practical engineering judgment.",
  hero:
    "I build public products for job discovery, career decisions, and AI-assisted workflows.",
  intro:
    "I’m a software engineer and product builder creating RoleTrails, writing about practical AI-assisted development, and contributing through mentorship, judging, and reviewing.",
};

export const links: Record<string, ExternalLink> = {
  roletrails: {
    label: "RoleTrails",
    url: "",
    type: "product",
    status: "pending",
    description: "Public product link pending.",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://linkedin.com/in/samvid-zare",
    type: "social",
    status: "public",
    description: "Professional profile.",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/samz007",
    type: "social",
    status: "public",
    description: "Public code profile.",
  },
  email: {
    label: "Email",
    url: "",
    type: "contact",
    status: "pending",
    description: "Email can be added later if a dedicated public alias is available.",
  },
  topmate: {
    label: "Topmate",
    url: "https://topmate.io/samvid_zare",
    type: "mentorship",
    status: "public",
    description: "Mentorship booking.",
  },
  ieeeVerification: {
    label: "IEEE SoutheastCon verification",
    url: "",
    type: "verification",
    status: "available_on_request",
    description: "Certificate available upon request.",
  },
  laHacksVerification: {
    label: "LA Hacks verification",
    url: "",
    type: "verification",
    status: "available_on_request",
    description: "Invitation or verification available upon request.",
  },
  liveAiVerification: {
    label: "LIVE AI Ivy Plus verification",
    url: "",
    type: "verification",
    status: "available_on_request",
    description: "Verification available upon request.",
  },
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Recognition", href: "/recognition" },
  { label: "Notes", href: "/notes" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Contact", href: "/contact" },
];

export const credibilityChips = [
  "RoleTrails",
  "Job Discovery",
  "AI-Assisted Product Development",
  "Technical Reviewing",
  "Hackathon Judging",
  "Mentorship",
  "Career Access",
  "Seattle",
];

export const projects: Project[] = [
  {
    title: "RoleTrails",
    slug: "roletrails",
    status: "Active",
    type: "Public Product",
    shortDescription:
      "A free job discovery platform helping people explore roles, companies, and career paths in one place.",
    longDescription:
      "RoleTrails is my public product experiment around career access. The goal is simple: make job discovery less fragmented and more useful for people navigating career decisions.",
    focusTags: [
      "Career Access",
      "Job Discovery",
      "AI-Assisted Development",
      "Public Product",
    ],
    year: "2026",
    externalUrl: links.roletrails.url,
    githubUrl: "",
    notesUrl: "/notes/building-roletrails-in-public",
    feedbackUrl: "",
    isFeatured: true,
    visibility: "public",
    metrics: [
      "Users helped",
      "Feedback quality",
      "Returning users",
      "Roles explored",
      "Searches performed",
      "Testimonials",
      "Reported interviews or job outcomes",
    ],
    links: [links.roletrails],
  },
];

export const roletrails = {
  project: projects[0],
  problem:
    "Job search is fragmented across job boards, company pages, LinkedIn posts, referrals, spreadsheets, and recruiter messages. RoleTrails is built to make discovery more organized.",
  whatBuilding: [
    "Role and company discovery",
    "Search and filtering",
    "Career-path exploration",
    "Feedback loops",
    "Future recommendation features",
  ],
  whyItMatters:
    "Job search is not just an application problem. It is a discovery and decision-making problem.",
  howBuilding:
    "RoleTrails is built with AI-assisted product development, rapid iteration, and continuous product judgment.",
  whatThisShows:
    "RoleTrails reflects my interest in public product building, career access, AI-assisted development, and useful tools for real people.",
};

export const recognitionItems = [
  {
    slug: "ieee-southeastcon-2026",
    title: "Technical Reviewer",
    organization: "IEEE SoutheastCon 2026",
    category: "Reviewing · 2026",
    summary:
      "Reviewed AI and engineering research submissions, including work related to AI trust, payments, fraud detection, and engineering systems.",
    detailTitle: "IEEE SoutheastCon 2026",
    detailRole: "Technical Reviewer",
    sections: {
      role: "Technical Reviewer",
      organization: "IEEE SoutheastCon 2026",
      context:
        "Reviewed AI and engineering research submissions, including topics related to AI trust, payments, fraud detection, and engineering systems.",
      whyItMatters:
        "Technical review is a trust role. It requires clear reading, sound judgment, and respect for both research contribution and practical engineering quality.",
      verification: links.ieeeVerification.description,
    },
  },
  {
    slug: "la-hacks-2026",
    title: "Invited Judge",
    organization: "LA Hacks 2026",
    category: "Judging · 2026",
    summary:
      "Evaluated student-built technology projects at a major student hackathon with 1,000+ participants and approximately 300 projects.",
    detailTitle: "LA Hacks 2026",
    detailRole: "Invited Judge",
    sections: {
      role: "Invited Judge",
      organization: "LA Hacks 2026",
      context:
        "Evaluated student-built technology projects at a major student hackathon with 1,000+ participants and approximately 300 projects.",
      whyItMatters:
        "Judging student innovation rewards clarity, usefulness, technical execution, and the ability to explain a product under real constraints.",
      verification: links.laHacksVerification.description,
    },
  },
  {
    slug: "live-ai-ivy-plus-2026",
    title: "Judge",
    organization: "LIVE AI Ivy Plus 2026",
    category: "Judging · 2026",
    summary:
      "Evaluated AI-focused projects from student and builder teams across the Ivy Plus innovation community.",
    detailTitle: "LIVE AI Ivy Plus 2026",
    detailRole: "Judge",
    sections: {
      role: "Judge",
      organization: "LIVE AI Ivy Plus 2026",
      context:
        "Evaluated AI-focused projects from student and builder teams across the Ivy Plus innovation community.",
      whyItMatters:
        "AI project evaluation requires attention to user value, technical feasibility, responsible use, and whether the system is more than a demo.",
      verification: links.liveAiVerification.description,
    },
  },
];

export const notes = [
  {
    slug: "building-roletrails-in-public",
    title: "Building RoleTrails in Public",
    status: "Draft",
    summary:
      "Notes on building a public job discovery product with AI-assisted development workflows, product judgment, and user feedback.",
    body: [
      "RoleTrails is my public product-building lane for career access. The goal is to make job discovery less scattered and more useful for people navigating roles, companies, and career paths.",
      "The build process is intentionally public-product oriented: define the user problem, ship the smallest useful surface, gather feedback, and improve the product through measured iteration.",
      "AI-assisted development helps with speed, but the product still depends on judgment: what to build, what to remove, what to measure, and how to keep the experience useful for real job seekers.",
    ],
  },
  {
    slug: "ai-assisted-product-development",
    title: "AI-Assisted Product Development Without Losing Taste",
    status: "Planned",
    summary:
      "How to use AI coding tools for speed without outsourcing product thinking, engineering judgment, or quality.",
    body: [
      "AI coding tools are powerful accelerators, but they do not replace taste. They make it easier to generate options; they do not decide which options deserve to exist.",
      "The useful workflow is not blind generation. It is structured iteration: clarify the user need, constrain the implementation, review the output, test behavior, and keep the product coherent.",
      "The highest leverage skill is knowing when to accept, reshape, or reject generated work.",
    ],
  },
  {
    slug: "rag-systems-without-the-hype",
    title: "RAG Systems Without the Hype",
    status: "Planned",
    summary:
      "A practical note on retrieval, grounding, evaluation, and failure modes in AI systems, written from public-safe principles.",
    body: [
      "RAG systems are useful when they improve context quality and user trust. They are not automatically reliable because retrieval exists.",
      "The important questions are practical: what sources are trusted, how retrieval is evaluated, how uncertainty is surfaced, and what happens when the system does not know enough.",
      "Good RAG design is less about appearing intelligent and more about making the system easier to verify.",
    ],
  },
  {
    slug: "what-engineers-learn-from-helping-job-seekers",
    title: "What Engineers Learn from Helping Job Seekers",
    status: "Planned",
    summary:
      "Observations from mentorship, job discovery, profile positioning, and career decision-making.",
    body: [
      "Helping job seekers reveals how much of career progress depends on clarity: what role someone is aiming for, what evidence they can show, and what gaps are actually blocking them.",
      "Engineering mentorship often becomes a product-thinking exercise. The task is to reduce ambiguity, create options, and turn fuzzy anxiety into concrete next steps.",
      "That is also the motivation behind RoleTrails: better discovery, clearer paths, and more useful tools for career decisions.",
    ],
  },
];

export const mentorshipTopics = [
  "Career direction",
  "Job search strategy",
  "Profile positioning",
  "Interview preparation",
  "AI-assisted product building",
  "Backend and system design thinking",
  "Project selection",
  "Technical communication",
  "Early-career growth",
];

export const principles = [
  {
    title: "Products over posture",
    summary:
      "I care about building things people can actually use, not just pages that describe ambition.",
  },
  {
    title: "Judgment over hype",
    summary:
      "AI tools are useful, but good outcomes still depend on taste, structure, evaluation, and clear thinking.",
  },
  {
    title: "Career access matters",
    summary:
      "Many people do not need more generic advice. They need better discovery, clearer options, and practical next steps.",
  },
  {
    title: "Trust compounds through contribution",
    summary:
      "Reviewing, judging, teaching, mentoring, and building public tools matter most when they are useful to real people.",
  },
];
