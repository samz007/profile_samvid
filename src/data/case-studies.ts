export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  company: string;
  domain: string;
  role: string;
  year: string;
  scale: string;
  stack: string[];
  impact: string[];
  sections: {
    problem: string;
    mattered: string;
    role: string;
    architecture: string;
    decisions: string[];
    riskControls: string[];
    tradeoffs: string;
    improve: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-genai-support-agent",
    title: "Enterprise GenAI support agent",
    summary:
      "Context-aware multi-agent workflow for complex support cases, reducing case work time while improving resolution speed.",
    company: "AWS",
    domain: "GenAI support intelligence",
    role: "Strategy, design, and delivery lead",
    year: "2025-present",
    scale: "Thousands of engineers, multi-month production usage",
    stack: ["GenAI agents", "Knowledge systems", "Secure context", "Evaluation loops"],
    impact: [
      "~12% average support case work-time reduction",
      "~10% improvement in resolution speed",
      "Adoption across a few thousand engineers",
    ],
    sections: {
      problem:
        "Support engineers needed faster access to scattered customer, account, and operational context while working in high-trust support environments.",
      mattered:
        "When the workflow is slow, customer resolution slows. When the context is wrong, trust in AI collapses. The system needed to improve speed without weakening judgment.",
      role:
        "Led strategy, design, stakeholder alignment, and delivery execution across platform, product, and applied science partners.",
      architecture:
        "A centralized context layer feeds a multi-agent workflow that can retrieve, reason over, and present case-aware information while keeping the engineer in control.",
      decisions: [
        "Designed around context quality before agent novelty.",
        "Separated ingestion foundations from downstream agent experiences.",
        "Optimized for adoption inside existing support workflows instead of forcing a new operating model.",
      ],
      riskControls: [
        "Human-in-the-loop support flow",
        "Scoped context access",
        "Trust-sensitive presentation of recommendations",
      ],
      tradeoffs:
        "The core tradeoff was speed versus trust. We prioritized dependable context and measurable workflow improvement over broader but less reliable automation.",
      improve:
        "I would invest further in explicit confidence signals, failure taxonomies, and longitudinal evaluation of recommendation quality.",
    },
  },
  {
    slug: "customer-context-platform",
    title: "Centralized customer context platform",
    summary:
      "Secure ingestion and context foundation for personalized support workflows and large-scale internal GenAI usage.",
    company: "AWS",
    domain: "AI platform foundation",
    role: "Co-lead for architecture and adoption path",
    year: "2025-present",
    scale: "10+ heterogeneous datasets, 1,000+ GenAI agents",
    stack: ["Data ingestion", "Context platform", "Security", "Workflow integrations"],
    impact: [
      "Shared context foundation for internal and external teams",
      "Enabled broad GenAI personalization patterns",
      "Reduced friction for high-value context contribution",
    ],
    sections: {
      problem:
        "Customer context lived across systems, documents, and team-specific processes, making personalized support automation hard to scale safely.",
      mattered:
        "Without a shared context layer, every agent and workflow rebuilds its own truth source, increasing duplication, inconsistency, and security risk.",
      role:
        "Co-led the platform direction and helped shape a contribution model that fit existing workflows for thousands of users.",
      architecture:
        "A secure ingestion framework normalizes heterogeneous context sources and makes them available to downstream support and GenAI systems.",
      decisions: [
        "Centralized common platform concerns while preserving extensibility.",
        "Designed a Microsoft Word plugin to meet users where valuable context was already created.",
        "Built around low-friction contribution rather than top-down compliance.",
      ],
      riskControls: [
        "Secure ingestion boundaries",
        "Dataset-specific handling",
        "Controlled downstream usage patterns",
      ],
      tradeoffs:
        "Centralization improves consistency, but can create adoption resistance. The design treated user workflow fit as a platform requirement.",
      improve:
        "I would add richer contributor feedback loops that show users how their context improves downstream support quality.",
    },
  },
  {
    slug: "runbook-agent",
    title: "Production runbook agent pattern",
    summary:
      "A reusable enterprise RAG pattern for support and operations workflows where correctness, auditability, and failure handling matter.",
    company: "AWS / pattern",
    domain: "RAG and operational AI",
    role: "AI workflow designer and platform engineer",
    year: "2024-2026",
    scale: "Reusable across support and engineering workflows",
    stack: ["RAG", "Retrieval quality", "LLM evaluation", "Operational workflows"],
    impact: [
      "Reduced repeated manual lookup",
      "Improved consistency in operational guidance",
      "Created reusable thinking for AI support tools",
    ],
    sections: {
      problem:
        "Runbooks and operational knowledge often sprawl across documents, tribal knowledge, tickets, and team-specific playbooks.",
      mattered:
        "A runbook agent is useful only when it handles ambiguity honestly. Unsupported confidence can be worse than no automation.",
      role:
        "Designed reusable patterns for grounding, review, and practical adoption in support-oriented workflows.",
      architecture:
        "A retrieval layer gathers relevant operational context, an LLM synthesizes a candidate response, and the workflow presents evidence, caveats, and next actions.",
      decisions: [
        "Treat retrieval quality as the product surface.",
        "Expose source grounding and uncertainty.",
        "Keep escalation paths explicit for ambiguous cases.",
      ],
      riskControls: [
        "Source-backed responses",
        "Human approval before sensitive actions",
        "Failure-mode-oriented evaluation",
      ],
      tradeoffs:
        "A cautious agent may feel less magical, but it earns more trust in production support settings.",
      improve:
        "I would add regression suites for known failure modes and track answer usefulness over time by domain.",
    },
  },
  {
    slug: "target-pricing-platform",
    title: "Target markdown pricing compute platform",
    summary:
      "Distributed pricing and optimization platform generating markdown decisions across national retail scale.",
    company: "Target",
    domain: "Retail pricing and optimization",
    role: "Engineer and senior delivery owner",
    year: "2018-2021",
    scale: "5M+ items weekly across 1,800+ stores and Target.com",
    stack: ["Kafka", "Spring Boot", "Kubernetes", "Elasticsearch", "Redis", "Forecasting"],
    impact: [
      "Automated item-location pairing for millions of items",
      "Improved reliability and debuggability of large workflows",
      "Supported clearance decisions tied to retail sell-through",
    ],
    sections: {
      problem:
        "Pricing workflows needed to convert large-scale inventory, forecast, and business constraints into timely markdown recommendations.",
      mattered:
        "Markdown pricing directly affects inventory movement, margins, and store execution. Small accuracy or reliability changes have outsized business impact.",
      role:
        "Co-designed platform components, improved observability, and later led architecture, planning, and stakeholder alignment for pricing applications.",
      architecture:
        "Event-driven compute services process item-location data, forecasting signals, and business rules to generate actionable markdown prices.",
      decisions: [
        "Introduced run-level metrics and deterministic execution paths.",
        "Improved failure attribution, partial reruns, and backfill support.",
        "Optimized query and processing patterns for weekly national scale.",
      ],
      riskControls: [
        "Structured logging",
        "Run-level observability",
        "Partial rerun and backfill mechanisms",
      ],
      tradeoffs:
        "The system balanced optimization quality, operational deadlines, data quality, and the need for explainable business decisions.",
      improve:
        "I would add stronger simulation tooling for scenario testing and business-rule impact analysis.",
    },
  },
  {
    slug: "mainframe-modernization",
    title: "Business-critical pricing modernization",
    summary:
      "Modernization and delivery leadership across high-stakes retail pricing workflows under business-sensitive constraints.",
    company: "Target",
    domain: "Platform modernization",
    role: "Senior engineer and delivery owner",
    year: "2021",
    scale: "Pricing workflows tied to roughly 70% sell-through rates",
    stack: ["Microservices", "Planning", "Stakeholder alignment", "Retail systems"],
    impact: [
      "Kept high-priority pricing initiatives on track",
      "Reduced manual analyst work for weekly pricing operations",
      "Balanced team execution with business-critical delivery needs",
    ],
    sections: {
      problem:
        "Critical pricing workflows needed modernization while continuing to serve business teams operating on tight retail timelines.",
      mattered:
        "Pricing systems are not isolated engineering projects. They are operational machinery for margin, inventory, and store execution.",
      role:
        "Owned backend architecture, project planning, stakeholder alignment, work distribution, and blocker removal.",
      architecture:
        "Modern services and automation replaced manual or legacy-heavy workflows while preserving operational continuity.",
      decisions: [
        "Prioritized high-leverage automation over broad platform churn.",
        "Coordinated execution across engineering and product stakeholders.",
        "Stepped into critical gaps where delivery risk was highest.",
      ],
      riskControls: [
        "Incremental migration",
        "Stakeholder checkpoints",
        "Operational continuity during modernization",
      ],
      tradeoffs:
        "Modernization had to move fast enough to matter while staying conservative around business-critical pricing correctness.",
      improve:
        "I would formalize migration scorecards earlier to make risk and business readiness more visible to all stakeholders.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
