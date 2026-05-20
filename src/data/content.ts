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

export type Project = {
  title: string;
  slug: string;
  description: string;
  externalUrl: string;
  internalHref: string;
  status: ProjectStatus;
  tags: string[];
};

export type RecognitionVerificationStatus =
  | "public_event_page"
  | "available_on_request"
  | "private"
  | "pending";

export type RecognitionItem = {
  title: string;
  role: string;
  organization: string;
  year: string;
  description: string;
  internalHref: string;
  eventUrl?: string;
  devpostUrl?: string;
  verificationStatus: RecognitionVerificationStatus;
  category: string;
  verificationLabel: string;
  slug: string;
  whyItMatters: string;
};

export const site = {
  name: "Samvid Zare",
  location: "Seattle, WA",
  siteUrl: "https://portfolio-website-blue-xi-83.vercel.app",
  title: "Samvid Zare | RoleTrails, Job Discovery & Career Clarity",
  description:
    "Samvid Zare builds RoleTrails and writes about job discovery, career clarity, AI-assisted development, and mentorship.",
  hero: "Samvid Zare",
  intro: "Building RoleTrails — a cleaner way to discover jobs and career paths.",
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
    description:
      "A free job discovery platform for exploring roles, companies, and career paths in one place.",
    externalUrl: links.roletrails.url,
    internalHref: "/projects/roletrails",
    status: "Active",
    tags: [
      "Career Access",
      "Job Discovery",
      "AI-Assisted Development",
      "Public Product",
    ],
  },
];

export const roletrails = {
  project: projects[0],
  type: "Public Product",
  problem:
    "Job search is fragmented across job boards, company pages, LinkedIn posts, referrals, spreadsheets, and recruiter messages. RoleTrails is built to make discovery more organized.",
  helpsWith: [
    "Explore roles without starting from a blank search box",
    "Compare companies and paths in one place",
    "Notice repeated skills, titles, and hiring patterns",
    "Save useful leads before they disappear into tabs and spreadsheets",
    "Turn scattered job-search activity into a clearer map",
  ],
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
    "RoleTrails reflects my interest in building in public, job discovery, AI-assisted development, and useful tools for real people.",
  metrics: [
    "Users helped",
    "Feedback quality",
    "Returning users",
    "Roles explored",
    "Testimonials",
    "Reported interviews or job outcomes",
  ],
};

export const recognitionItems: RecognitionItem[] = [
  {
    slug: "ieee-southeastcon-2026",
    title: "IEEE SoutheastCon 2026",
    organization: "IEEE SoutheastCon",
    role: "Technical Reviewer",
    year: "2026",
    category: "Reviewing",
    description:
      "Reviewed AI and engineering research submissions, including work related to AI trust, payments, fraud detection, and engineering systems.",
    internalHref: "/recognition/ieee-southeastcon-2026",
    eventUrl: "",
    verificationStatus: "available_on_request",
    verificationLabel: "Certificate available upon request",
    whyItMatters:
      "Technical review is a trust role. It requires clear reading, sound judgment, and respect for both research contribution and practical engineering quality.",
  },
  {
    slug: "la-hacks-2026",
    title: "LA Hacks 2026",
    organization: "LA Hacks",
    role: "Invited Judge",
    year: "2026",
    category: "Judging",
    description:
      "Evaluated student-built technology projects at a major student hackathon with 1,000+ participants and approximately 300 projects.",
    internalHref: "/recognition/la-hacks-2026",
    eventUrl: "https://lahacks.com/",
    devpostUrl: "https://la-hacks-2026.devpost.com/",
    verificationStatus: "public_event_page",
    verificationLabel: "Public event page",
    whyItMatters:
      "Judging student innovation rewards clarity, usefulness, technical execution, and the ability to explain a product under real constraints.",
  },
  {
    slug: "live-ai-ivy-plus-2026",
    title: "LIVE AI Ivy Plus 2026",
    organization: "LIVE AI",
    role: "Judge",
    year: "2026",
    category: "Judging",
    description:
      "Evaluated AI-focused projects from student and builder teams across the Ivy Plus innovation community.",
    internalHref: "/recognition/live-ai-ivy-plus-2026",
    eventUrl: "https://liveaiglobal.com/ivyplus/",
    devpostUrl: "https://liveai-ivyplus-2026.devpost.com/",
    verificationStatus: "public_event_page",
    verificationLabel: "Public event page",
    whyItMatters:
      "AI project evaluation requires attention to user value, technical feasibility, responsible use, and whether the system is more than a demo.",
  },
];

export const notes = [
  {
    slug: "job-search-is-a-discovery-problem",
    title: "Job Search Is a Discovery Problem",
    status: "Draft",
    summary:
      "Why finding the next career move is less about applying everywhere and more about seeing better options sooner.",
    body: [
      "Most job-search tools treat the problem as a transaction: find a posting, submit an application, repeat. But the harder part often happens earlier. People are trying to understand what roles exist, which companies are worth tracking, what titles map to their experience, and what paths are realistic from where they are now.",
      "That is a discovery problem. The information is scattered across job boards, company pages, LinkedIn posts, recruiter messages, referrals, saved tabs, and private spreadsheets. The work becomes less about one perfect search query and more about building a clearer map of options.",
      "RoleTrails is my attempt to build around that gap. I want job seekers to explore roles, companies, and career paths without constantly bouncing across ten different places. The product should help people notice patterns, compare options, and make better decisions before they apply.",
      "The point is not to replace judgment. It is to give people a better surface for judgment: clearer options, less friction, and a stronger sense of what to do next.",
    ],
  },
  {
    slug: "roletrails-build-log",
    title: "RoleTrails Build Log",
    status: "Active",
    summary:
      "Short notes on what I’m shipping, learning, and testing while building RoleTrails in public.",
    body: [
      "Current focus: make the product easier to understand in the first few seconds. A job discovery tool has to communicate what it helps with before asking people to invest attention.",
      "What I’m testing: clearer role and company browsing, tighter search/filter flows, and better ways to collect feedback from people using the product during real career moves.",
      "What I’m learning: AI-assisted development is useful for speed, but the product still depends on taste. The important questions are what to remove, what to measure, and what makes the experience more useful for someone who is already overwhelmed.",
    ],
  },
  {
    slug: "building-roletrails-in-public",
    title: "Building RoleTrails in Public",
    status: "Draft",
    summary:
      "Notes on building a public job discovery product with AI-assisted development workflows, product judgment, and user feedback.",
    body: [
      "RoleTrails is my public product-building lane for job discovery and career clarity. The goal is to make the search less scattered and more useful for people navigating roles, companies, and career paths.",
      "The build process is intentionally public-product oriented: define the user problem, ship the smallest useful surface, gather feedback, and improve the product through measured iteration.",
      "AI-assisted development helps with speed, but the product still depends on judgment: what to build, what to remove, what to measure, and how to keep the experience useful for real job seekers.",
    ],
  },
  {
    slug: "ai-assisted-product-development",
    title: "AI-Assisted Product Development Without Losing Taste",
    status: "Planned",
    summary:
      "How to use AI coding tools for speed without outsourcing product thinking, taste, or quality.",
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
