// OMODA | JAECOO The Glen - Digital Marketing Proposal
// All client-facing copy below comes from the approved proposal copy.
// Items marked `pending: true` are still awaiting a confirmed price ("Holly to check quote price").

export const proposalData = {
  client: {
    "name": "OMODA | JAECOO The Glen",
    "logoUrl": "/glen/omoda-jaecoo-the-glen-logo.webp",
    "logoWhiteUrl": "/glen/omoda-jaecoo-the-glen-logo-white.webp"
  },
  agency: {
    "name": "Big On Digital",
    "contactEmail": "hello@bigondigital.com"
  },
  hero: {
    "title": "OMODA | JAECOO The Glen",
    "banner": { "text": "Social Media Proposal by", "agency": "Big On Digital" },
    "heroBgUrl": "/glen/jaecoo-j5-hero.webp"
  },
  sections: [
    {
      type: 'Introduction',
      id: 'intro',
      navLabel: 'Introduction',
      data: {
        eyebrow: "Introduction",
        title: "Driving Digital Growth for OMODA | JAECOO The Glen",
        paragraphs: [
          "OMODA | JAECOO The Glen has a strong vehicle range and an established digital presence. The next stage is to build a coordinated dealership marketing system that strengthens local recognition, creates meaningful engagement and generates measurable enquiries.",
          "Big On Digital will combine strategic planning, original dealership content and targeted advertising to showcase the vehicles while bringing the showroom experience to life. Each platform will serve a clear purpose, guiding prospective customers from discovery to test drives and qualified enquiries."
        ],
        objectivesTitle: "Project Objectives",
        objectives: [
          "Strengthen the dealership’s local digital identity.",
          "Create a consistent presence across priority platforms.",
          "Showcase vehicles through engaging, locally produced content.",
          "Grow relevant audiences within the dealership’s market.",
          "Generate trackable test-drive and sales enquiries.",
          "Create clearer pathways from social media to WhatsApp and the website."
        ],
        imageUrl: "/glen/jaecoo-j7-lakeside.webp"
      }
    },

    {
      type: 'Packages',
      id: 'packages',
      navLabel: 'Packages',
      data: {
        title: "Monthly Package Options",
        columns: ["Included Service", "Monthly Value"],
        packages: [
          {
            id: 'package-1',
            label: "Package 1",
            name: "Digital Presence",
            description: "A consistent monthly social media presence designed to strengthen dealership visibility and maintain engagement across priority platforms.",
            items: [
              { service: "Social Media Design and Management", value: "TBC", pending: true }
            ],
            totalValue: "R9,950",
            price: "R9,950"
          },
          {
            id: 'package-2',
            label: "Package 2",
            name: "Content and Community",
            description: "A complete organic marketing package combining social media management with original dealership photography and video.",
            items: [
              { service: "Social Media Design and Management", value: "TBC", pending: true },
              { service: "Monthly Photography and Videography", value: "R9,950" }
            ],
            totalValue: "R19,900",
            discount: "R400",
            price: "R19,500"
          },
          {
            id: 'package-3',
            label: "Package 3",
            name: "Content and Lead Generation",
            description: "A coordinated content and advertising package designed to build dealership visibility and convert audience attention into measurable enquiries.",
            items: [
              { service: "Social Media Design and Management", value: "TBC", pending: true },
              { service: "Monthly Photography and Videography", value: "R9,950" },
              { service: "Meta Advertising Management", value: "R3,950" }
            ],
            totalValue: "R23,850",
            discount: "R900",
            price: "R22,950",
            mediaBudget: "Meta media budget: From R6,000 per month, paid directly to Meta.",
            featured: true
          }
        ]
      }
    },

    {
      type: 'PartHeader',
      id: 'once-off',
      navLabel: 'Once-Off Foundation',
      data: {
        title: "Once-Off Marketing Foundation",
        imageUrl: "/glen/omoda-c5-shs.webp"
      }
    },
    {
      type: 'Service',
      id: 'content-planner',
      data: {
        number: "1",
        title: "Social Media Content Planner",
        subtitle: "A Clear Roadmap for Consistent Content",
        imageUrl: "/social-media-calendar.png",
        content: [
          { type: 'p', text: "A strategic content planner will establish the direction for the dealership’s social media. It will provide a practical framework for balancing vehicle promotions with staff, showroom, educational and community content." },
          { type: 'list', title: "Deliverables include:", items: [
            "platform and audience overview;",
            "content pillars and campaign themes;",
            "recommended monthly publishing structure;",
            "content format and channel guidance;",
            "tone, hashtag and call-to-action guidance;",
            "lead-generation content recommendations."
          ] }
        ],
        prices: [{ label: "Once-off price", amount: "R3,950" }]
      }
    },
    {
      type: 'Service',
      id: 'profile-optimisation',
      data: {
        number: "2",
        title: "Social Media Profile Optimisation",
        subtitle: "A Stronger First Impression",
        imageUrl: "/glen/customer-support.webp",
        content: [
          { type: 'p', text: "The dealership’s Facebook, Instagram, TikTok and Google Business profiles will be reviewed and optimised to improve brand consistency, local discovery and customer action." },
          { type: 'p', text: "Optimisation will cover profile descriptions, contact information, website links, calls to action and relevant platform settings. Recommendations will also be provided for pinned content, Highlights and branded profile elements." },
          { type: 'note', text: "New branded graphics are quoted separately where required." }
        ],
        prices: [{ label: "Once-off price", amount: "R2,950" }]
      }
    },
    {
      type: 'Service',
      id: 'meta-setup',
      data: {
        number: "3",
        title: "Meta Business and Tracking Setup",
        subtitle: "Building the Foundation for Measurable Advertising",
        imageUrl: "/stock/meta-business-suite.jpg",
        content: [
          { type: 'p', text: "Big On Digital will review and configure the dealership’s Meta business assets to support secure account management, effective advertising and measurable conversions." }
        ],
        blocks: [
          {
            title: "Meta Business Portfolio and Inbox Setup",
            content: [
              { type: 'list', title: "The setup may include:", items: [
                "Meta Business Portfolio review or creation;",
                "Facebook and Instagram asset connections;",
                "user and partner permissions;",
                "ad account creation or configuration;",
                "billing guidance;",
                "Meta Business Suite Inbox setup;",
                "automated greeting and away messages."
              ] }
            ],
            prices: [{ label: "Once-off price", amount: "R2,950" }]
          },
          {
            title: "Meta Pixel and Conversion Tracking",
            content: [
              { type: 'list', title: "The tracking setup may include:", items: [
                "website domain verification;",
                "Meta Pixel installation;",
                "priority website event configuration;",
                "contact and WhatsApp click tracking;",
                "submitted enquiry tracking;",
                "testing and verification."
              ] },
              { type: 'note', text: "The exact scope will depend on the assets, permissions and website access controlled by the dealership or Motus. Advanced development and account recovery are excluded." }
            ],
            prices: [{ label: "Once-off price", amount: "R3,950" }]
          }
        ]
      }
    },
    {
      type: 'SetupSummary',
      id: 'setup-summary',
      data: {
        // Shown on the quotes page only; the main proposal skips it
        hideFromProposal: true,
        title: "Once-Off Setup Summary",
        columns: ["Service", "Price"],
        rows: [
          { service: "Social Media Content Planner", price: "R3,950" },
          { service: "Social Media Profile Optimisation", price: "R2,950" },
          { service: "Meta Business Portfolio and Inbox Setup", price: "R2,950" },
          { service: "Meta Pixel and Conversion Tracking", price: "R3,950" }
        ],
        total: { label: "Total once-off setup", amount: "R13,800" },
        deposit: { label: "50% deposit", amount: "R6,900" },
        balance: { label: "Remaining balance", amount: "R6,900" },
        note: "The 50% deposit secures the project and allows the setup work to begin. The remaining balance is payable before final handover or campaign activation."
      }
    },

    {
      type: 'PartHeader',
      id: 'monthly',
      navLabel: 'Monthly Services',
      data: {
        title: "Monthly Marketing Services",
        imageUrl: "/glen/omoda-c5-studio-dark.webp"
      }
    },
    {
      type: 'Service',
      id: 'social-management',
      data: {
        number: "4",
        title: "Social Media Design and Management",
        subtitle: "Keeping the Brand Visible and Relevant",
        imageUrl: "/stock/social-media-management.jpg",
        content: [
          { type: 'p', text: "Big On Digital will plan, create and manage a coordinated monthly presence across Facebook, Instagram, TikTok and Google Business." },
          { type: 'p', text: "Content will be adapted for each platform, combining vehicle promotions with educational, dealership-led and community content. Clear calls to action will encourage WhatsApp conversations, website visits and test-drive enquiries." },
          { type: 'list', title: "Monthly scope includes:", items: [
            "12 core content pieces;",
            "static designs, carousels and motion graphics;",
            "monthly content planning;",
            "copywriting and platform adaptation;",
            "publishing across Facebook and Instagram;",
            "selected TikTok publishing;",
            "Google Business updates;",
            "basic comment and inbox monitoring;",
            "monthly performance reporting;",
            "one monthly planning or review meeting."
          ] },
          { type: 'note', text: "Original photography, filming, extensive video editing and active sales inbox management are excluded." }
        ],
        prices: [{ label: "Standalone price", amount: "TBC", pending: true }]
      }
    },
    {
      type: 'Service',
      id: 'content-creation',
      data: {
        number: "5",
        title: "Monthly Content Creation",
        subtitle: "Bringing the Dealership Experience to Life",
        imageUrl: "/glen/omoda-c9-lifestyle.webp",
        content: [
          { type: 'p', text: "Monthly on-site content sessions will create a reliable bank of original photography and video. The content will feature selected vehicles, model features, staff, showroom activity, customer experiences and current offers." },
          { type: 'p', text: "A planned shot list will ensure that each session supports the upcoming social media calendar and advertising campaigns." },
          { type: 'list', title: "Monthly deliverables include:", items: [
            "pre-shoot planning and agreed shot list;",
            "up to four hours on location;",
            "approximately 30 edited photographs;",
            "four edited vertical videos;",
            "standard post-production;",
            "one reasonable revision round per video."
          ] },
          { type: 'p', text: "Short-form video concepts may include vehicle walkarounds, feature demonstrations, staff-led content, test-drive moments and customer handovers." }
        ],
        prices: [{ label: "Standalone price", amount: "R9,950", suffix: "per month" }],
        blocks: [
          {
            title: "Influencer Marketing",
            content: [
              { type: 'p', text: "Relevant local or automotive creators may be recommended for selected dealership campaigns. Big On Digital can coordinate creator selection, campaign briefing, deliverables, content approvals and reporting through its influencer agency partner." },
              { type: 'note', text: "Influencer fees, usage rights, travel and additional production costs are quoted separately." }
            ],
            prices: [{ label: "Campaign management", amount: "From R8,000", suffix: "per campaign" }]
          }
        ]
      }
    },
    {
      type: 'Service',
      id: 'meta-ads',
      data: {
        number: "6",
        title: "Meta Advertising Management",
        subtitle: "Turning Attention into Enquiries",
        imageUrl: "/stock/meta-ads-live.jpg",
        content: [
          { type: 'p', text: "Meta advertising will support local awareness, website traffic and lead generation across Facebook and Instagram." },
          { type: 'p', text: "The campaign structure will prioritise test-drive and vehicle enquiries, supported by retargeting and selected audience-building activity." },
          { type: 'list', title: "Potential campaign focus:", items: [
            "test-drive and vehicle enquiries;",
            "current models and dealership offers;",
            "WhatsApp and instant-form leads;",
            "website traffic;",
            "website and engagement retargeting;",
            "selected audience-growth activity."
          ] },
          { type: 'list', title: "Monthly management includes:", items: [
            "management of up to three active campaigns;",
            "campaign planning and setup;",
            "audience creation;",
            "creative coordination;",
            "ongoing optimisation;",
            "retargeting;",
            "monthly advertising reporting."
          ] },
          { type: 'note', text: "The advertising budget is paid directly by the client to Meta." }
        ],
        prices: [
          { label: "Standalone management fee", amount: "R3,950", suffix: "per month" },
          { label: "Recommended Meta media budget", amount: "From R6,000", suffix: "per month" }
        ]
      }
    },

    {
      type: 'PartHeader',
      id: 'growth',
      navLabel: 'Growth Services',
      data: {
        title: "Optional Growth Services",
        imageUrl: "/omoda-c5-studio.jpg"
      }
    },
    {
      type: 'Service',
      id: 'aeo',
      data: {
        number: "7",
        title: "Monthly AEO Article and FAQs",
        subtitle: "Helping Customers Find Clear Answers",
        collapsible: true,
        toggleLabel: "View Articles",
        imageUrl: "/stock/aeo.jpg",
        content: [
          { type: 'p', text: "Search and answer-optimised website content can strengthen the dealership’s visibility across traditional search engines and AI-assisted search experiences." },
          { type: 'p', text: "Each article will address relevant customer questions about vehicle models, hybrid and electric technology, finance, trade-ins, servicing, test drives or ownership." },
          { type: 'list', title: "Monthly deliverables include:", items: [
            "customer-question and topic research;",
            "one professionally written website article;",
            "answer-focused headings and structure;",
            "a supporting FAQ section;",
            "SEO title and meta description;",
            "internal-linking recommendations;",
            "one revision round."
          ] },
          { type: 'note', text: "Website uploading is included where suitable access is provided. Technical website development and schema implementation are excluded." },
          { type: 'note', text: "This service may be added to any monthly package." }
        ],
        prices: [{ label: "Optional price", amount: "R2,250", suffix: "per month" }]
      }
    },
    {
      type: 'Service',
      id: 'google-ads',
      data: {
        number: "8",
        title: "Google Ads",
        subtitle: "Reaching Buyers with Active Intent",
        collapsible: true,
        toggleLabel: "View Google Ads",
        imageUrl: "/stock/google-ads.jpg",
        content: [
          { type: 'p', text: "The dealership currently has active Google advertising. Big On Digital can conduct an independent audit to identify opportunities to improve campaign structure, targeting, advertising messages, conversion tracking and budget allocation." },
          { type: 'list', title: "Potential campaign opportunities include:", items: [
            "dealership and location searches;",
            "OMODA and JAECOO model searches;",
            "test-drive and promotional searches;",
            "service and parts campaigns;",
            "remarketing and Performance Max, where appropriate."
          ] }
        ],
        blocks: [
          {
            title: "Google Ads Restructure and Setup",
            content: [
              { type: 'p', text: "Restructuring or creation of focused campaigns, including keyword research, campaign architecture, ad copy, negative keyword foundations, assets and location targeting." }
            ],
            prices: [{ label: "Once-off price", amount: "R5,750" }]
          },
          {
            title: "Google Ads Management",
            content: [
              { type: 'p', text: "Ongoing optimisation covering search terms, keywords, negative keywords, budgets, advertising tests and monthly reporting." }
            ],
            prices: [
              { label: "Management fee", amount: "R3,950", suffix: "per month" },
              { label: "Recommended Google media budget", amount: "From R6,000", suffix: "per month" }
            ]
          }
        ],
        footnote: "Google Ads services are optional and excluded from the three monthly packages."
      }
    },

    {
      type: 'ApproveCta',
      id: 'approve',
      data: {
        buttonText: "View Quotes and Approve"
      }
    },

    {
      type: 'ClientShowcase',
      id: 'clients',
      data: {
        title: "Some of our Clients",
        clients: [
          { name: "Ferris Cars", tagline: "Luxury Performance Automotive Group", logoUrl: "/clients/ferris-group.webp", platform: "Facebook", url: "https://www.facebook.com/ferriscarssa/" },
          { name: "WorkPods", tagline: "Entrepreneurial Business Growth Campus", logoUrl: "/clients/workpods.webp", platform: "Instagram", url: "https://www.instagram.com/workpodscommunity/" },
          { name: "Century 21 Wildlife", tagline: "Luxury Bushveld Property Experts", logoUrl: "/clients/century-21-wildlife.webp", platform: "Website", url: "https://www.century21wildlife.co.za/" },
          { name: "Cashbox Global", tagline: "Private Structured Investment Specialists", logoUrl: "/clients/cashbox-global.webp", platform: "LinkedIn", url: "https://www.linkedin.com/company/cashbox-global/" }
        ]
      }
    },
    {
      type: 'BrandBand',
      id: 'brand-band',
      data: {}
    },
    {
      type: 'AboutAgency',
      id: 'about',
      data: {
        // Copy and team from the VanillaHub proposal
        title: "About Big On Digital",
        paragraphs: [
          "Big On Digital is a boutique digital marketing agency offering expert, end-to-end marketing services to both small businesses and large corporations. With over two decades of combined industry experience, our team specialises in social media, branding, web development, and digital strategy that help clients grow their reach and strengthen their brand presence.",
          "We believe in the power of creativity, strategy, and innovation to transform businesses. Every project is approached with purpose and precision, combining design, technology, and storytelling to deliver meaningful results.",
          "Our team brings a dynamic mix of talent and insight, ensuring each brand we work with receives customised, high-impact digital solutions that drive measurable success.",
          "At Big On Digital, we don’t just build brands, we bring visions to life."
        ],
        team: [
          {
            name: "Andy",
            title: "Technical & Performance Lead",
            subtitle: "Development & Paid Media",
            description: "Andy owns the technical and performance layer of the agency. From website development to paid advertising and tracking, he ensures every campaign is built on strong systems and optimised for results.",
            image: "/team/andy.jpg"
          },
          {
            name: "Dominique",
            title: "Founder & Strategic Director",
            subtitle: "Growth & Strategy",
            description: "Dominique defines the vision behind every project, guiding brand positioning, marketing strategy, and long-term growth. She works closely with clients to translate ambition into structured digital direction that delivers measurable results.",
            image: "/team/dominique.jpg"
          },
          {
            name: "Francois",
            title: "Creative & AI Lead",
            subtitle: "Content, Design & Innovation",
            description: "Francois leads creative execution while driving the integration of AI across content and workflows. He shapes how ideas come to life, from social media and design to intelligent content systems, ensuring the brand remains both relevant and forward-thinking.",
            image: "/team/francois.jpg"
          }
        ]
      }
    }
  ],

  // Selectable items on the quotes page. Amounts are numeric so totals never depend on string parsing.
  quote: {
    optional: [
      { id: 'aeo', group: "Monthly AEO Article and FAQs", label: "Monthly AEO Article and FAQs", amount: 2250, monthly: true, display: "R2,250 per month" },
      { id: 'gads-setup', group: "Google Ads", label: "Google Ads Restructure and Setup", amount: 5750, display: "R5,750" },
      { id: 'gads-management', group: "Google Ads", label: "Google Ads Management", amount: 3950, monthly: true, display: "R3,950 per month", mediaBudget: "Recommended Google media budget: From R6,000 per month" },
      { id: 'influencer', group: "Influencer Marketing", label: "Influencer Marketing campaign management", amount: null, display: "From R8,000 per campaign" }
    ]
  }
};
