/**
 * WORLD SOCIAL SOLUTIONS — Central Data Store
 * Edit here OR use Admin Panel → changes save to localStorage
 * Data auto-loads from localStorage on every page visit
 */

const WSS = {

  company: {
    name:              "World Social Solutions",
    tagline:           "Your Partner in Digital Success",
    shortDesc:         "Digital marketing & creative solutions agency helping service-based businesses grow locally and internationally.",
    founded:           "2025",
    founderName:       "Gurleen Kaur",
    founderTitle:      "Founder & Digital Strategist",
    founderInitials:   "GK",
    founderBio:        "Gurleen Kaur started her digital marketing journey as a freelancer three years ago — no internship, no corporate background, just direct client work and real results. After two years of freelancing and helping businesses across multiple industries, she founded World Social Solutions in 2025 with a mission to deliver agency-level digital marketing to service-based businesses worldwide.",
    founderPhotoPath:  "",
    logoPath:          "",
    address:           "Mohalla Gokalpur, Jandiala Road, Tarn-Taran, Punjab, India",
    phone:             "+91 79736 12671",
    whatsapp:          "+91 77197 12671",
    whatsappLink:      "https://wa.me/917719712671",
    whatsappMessage:   "Hello, I would like to discuss my project with World Social Solutions.",
    email:             "worldsocialsolutions6@gmail.com",
    googleRating:      "4.9",
    googleReviewCount: "",
    instagramUrl:      "#",
    facebookUrl:       "#",
    linkedinUrl:       "#",
    youtubeUrl:        "#",
    heroAvailBadge:    "Available for New Projects",
    ctaPrimary:        "Start Your Project",
    ctaSecondary:      "Chat on WhatsApp"
  },

  seo: {
    home: {
      title:       "World Social Solutions | Digital Marketing Agency – Tarn-Taran, Punjab",
      description: "World Social Solutions is a full-service digital marketing & creative agency. We offer social media management, branding, web design, SEO, video editing & Meta ads for businesses worldwide.",
      keywords:    "digital marketing agency India, social media management Punjab, branding agency Tarn-Taran, website design, SEO services, Meta ads, video editing, World Social Solutions"
    },
    about: {
      title:       "About Us | World Social Solutions – Gurleen Kaur",
      description: "Learn how Gurleen Kaur built World Social Solutions from freelancing into a full-service digital marketing agency serving businesses locally and internationally since 2025.",
      keywords:    "about World Social Solutions, Gurleen Kaur digital marketing, digital marketing agency Punjab India"
    },
    services: {
      title:       "Services | Social Media, Branding, Web Design, SEO – World Social Solutions",
      description: "Explore our complete digital marketing services: social media management, graphic design, website design, video editing, Meta paid ads, Google My Business, SEO, and more.",
      keywords:    "social media management, branding services, website design India, video editing, paid ads Meta, Google My Business, SEO Punjab"
    },
    portfolio: {
      title:       "Portfolio | Our Work – World Social Solutions",
      description: "View our creative portfolio: branding, logo design, website projects, social media campaigns, video editing work for businesses across healthcare, real estate, immigration, and more.",
      keywords:    "digital marketing portfolio, branding projects India, logo design portfolio, website design showcase"
    },
    contact: {
      title:       "Contact Us | World Social Solutions – Get a Free Consultation",
      description: "Get in touch with World Social Solutions for a free consultation. Call, WhatsApp, or fill our contact form. Based in Tarn-Taran, Punjab, serving clients worldwide.",
      keywords:    "contact World Social Solutions, digital marketing consultation, WhatsApp marketing agency"
    }
  },

  stats: [
    { value: "3+",   label: "Years Experience" },
    { value: "50+",  label: "Projects Completed" },
    { value: "4+",   label: "Countries Served" },
    { value: "100%", label: "Client Satisfaction" }
  ],

  services: [
    { id: 1, icon: "📱", title: "Social Media Management",    description: "Strategic content creation, page management, audience engagement, and consistent brand growth across Instagram, Facebook, LinkedIn and more.", featured: true },
    { id: 2, icon: "🎨", title: "Graphic Designing",          description: "Professional logos, brand identity kits, marketing creatives, social media visuals, and print designs that stand out from the crowd.", featured: true },
    { id: 3, icon: "🌐", title: "Website Designing",          description: "Modern, responsive business websites built for growth, conversion, and lasting first impressions — mobile-first and SEO-friendly.", featured: true },
    { id: 4, icon: "🎬", title: "Video Editing",              description: "High-quality reels, promotional videos, short-form social content, and cinematic editing for maximum engagement and reach.", featured: false },
    { id: 5, icon: "📣", title: "Paid Ads – Meta",            description: "Targeted Meta ad campaigns designed to generate real leads, drive sales, and grow your customer base with measurable ROI.", featured: false },
    { id: 6, icon: "📍", title: "Google My Business Setup",  description: "Complete GMB setup and optimization so local customers can find, trust, and contact your business easily on Google Search and Maps.", featured: false },
    { id: 7, icon: "💎", title: "Branding & Identity",       description: "Full brand identity: logo, colour palette, typography, brand guidelines, and visual asset creation for a cohesive brand presence.", featured: false },
    { id: 8, icon: "🔍", title: "SEO",                       description: "On-page and off-page search engine optimization to improve your rankings, drive organic traffic, and generate qualified leads.", featured: false },
    { id: 9, icon: "📷", title: "Shoots & Invitation Cards", description: "Professional product and event photography, plus beautifully designed digital and print invitation cards for every occasion.", featured: false }
  ],

  process: [
    { icon: "💬", title: "Consultation",   desc: "We learn your business goals, target audience, and vision." },
    { icon: "🗺️", title: "Strategy",       desc: "We craft a tailored plan for your industry and objectives." },
    { icon: "✏️", title: "Design & Build", desc: "Precise execution — design, content, development." },
    { icon: "🚀", title: "Launch",         desc: "Go live and start generating results from day one." },
    { icon: "📈", title: "Optimise",       desc: "Monitor, refine, and scale for long-term growth." }
  ],

  about: {
    sectionTag:  "Our Story",
    title:       "Built from Experience.<br>Driven by Real Results.",
    paragraphs: [
      "World Social Solutions was founded by <strong>Gurleen Kaur</strong>, a passionate digital marketing professional who began her journey as an independent freelancer three years ago — without internships or corporate stepping stones, just real client work.",
      "Through dedication and hands-on experience across healthcare, real estate, immigration, education, fashion, and hospitality, she built expertise that textbooks can't teach. After two years of successful freelancing, she founded <strong>World Social Solutions in 2025</strong>.",
      "Today, the agency serves service-based businesses locally in Punjab and internationally — providing full-stack digital marketing, creative design, and strategic growth solutions."
    ],
    features: [
      { title: "Self-built from scratch",    desc: "No corporate shortcut — built through real client results from day one." },
      { title: "Full-service agency",        desc: "Branding, social, web, video, ads and SEO all under one roof." },
      { title: "Local roots, global reach",  desc: "Based in Tarn-Taran, Punjab — serving clients across 4+ countries." }
    ],
    mission:  "To deliver agency-level digital marketing strategies to every business — regardless of size — helping them compete and grow in the digital-first world.",
    vision:   "To be the most trusted digital marketing partner for service-based businesses across India and internationally."
  },

  portfolio: [
    { id: 1, category: "websites",  emoji: "🦺", bgGrad: "linear-gradient(135deg,#1a1a2e,#0f3460)", title: "Cosmic Safety & Traffic",       meta: "Website Design",       description: "Clean, professional website showcasing traffic and safety products with structured service presentation and clear CTAs.", link: "https://cosmicsafetyandtraffic.com/", linkLabel: "View Website ↗", imagePath: "", tags: ["Web Design","Business","Safety"] },
    { id: 2, category: "websites",  emoji: "☕", bgGrad: "linear-gradient(135deg,#2d1b0e,#6b3f1f)", title: "Coffee Moods",                  meta: "Website Design",       description: "Visually rich, modern website for a coffee brand — highlighting products and brand identity with warmth and character.",      link: "https://coffeemoods.in/",            linkLabel: "View Website ↗", imagePath: "", tags: ["Web Design","F&B","Branding"] },
    { id: 3, category: "branding",  emoji: "✈️", bgGrad: "linear-gradient(135deg,#0a2540,#1a5fa0)", title: "Gateway Travel Solutions",      meta: "Brand Identity",       description: "Modern travel branding with full application across merchandise, signage, and apparel — cohesive and memorable.",           link: "", linkLabel: "", imagePath: "", tags: ["Branding","Logo","Travel"] },
    { id: 4, category: "branding",  emoji: "🏥", bgGrad: "linear-gradient(135deg,#0d2818,#245c38)", title: "Manjit Ortho & Child Clinic",   meta: "Logo & Branding",      description: "Trust-based healthcare brand identity — clean, professional visuals designed to reassure patients at first glance.",           link: "", linkLabel: "", imagePath: "", tags: ["Branding","Healthcare","Logo"] },
    { id: 5, category: "branding",  emoji: "⭐", bgGrad: "linear-gradient(135deg,#1a0a2e,#4a1a99)", title: "Stellar Sky",                   meta: "Brand Identity",       description: "Bold, futuristic brand identity with dynamic logo design and a cohesive visual language for a tech-forward brand.",           link: "", linkLabel: "", imagePath: "", tags: ["Branding","Logo","Tech"] },
    { id: 6, category: "social",    emoji: "🍁", bgGrad: "linear-gradient(135deg,#8b0000,#dc143c)", title: "Sodhi Immigration – Campaign",  meta: "Social Media Campaign","description": "Full campaign creative suite: Canada, Europe, Australia, NZ visa promotions + student success stories and ad creatives.",  link: "", linkLabel: "", imagePath: "", tags: ["Social Media","Creatives","Immigration"] },
    { id: 7, category: "video",     emoji: "🎬", bgGrad: "linear-gradient(135deg,#0a1520,#1a3a5c)", title: "Instagram Reel Editing",        meta: "Video Editing",        description: "High-engagement reel with smooth transitions, text overlays, and music sync — designed for maximum social reach.",            link: "https://www.instagram.com/reel/DVpRxKojFBb/", linkLabel: "View Reel ↗", imagePath: "", tags: ["Video","Reels","Editing"] },
    { id: 8, category: "branding",  emoji: "🌿", bgGrad: "linear-gradient(135deg,#1a2e1a,#3a6b3a)", title: "SS Lawn Care & Snow Removal",   meta: "Brand Identity",       description: "Professional branding for a Canadian lawn care service — logo, colour palette, and business card design.", link: "", linkLabel: "", imagePath: "", tags: ["Branding","Landscaping","Logo"] },
    { id: 9, category: "print",     emoji: "🃏", bgGrad: "linear-gradient(135deg,#1a1a1a,#4a4a4a)", title: "Die Hard Solutions",            meta: "Print Design",         description: "Premium visiting card design with bold typography and clean layout that makes a lasting first impression.",                   link: "", linkLabel: "", imagePath: "", tags: ["Print","Business Card","Design"] }
  ],

  socialClients: [
    { id: 1, platform: "Instagram", name: "CanadaBeforeYouGo",  industry: "Immigration Guidance", tags: ["Canada PR","Immigration Reels","Awareness","Myth-Busting"],   link: "https://www.instagram.com/canadabeforeyougo_",  result: "Growing community of Canada-bound immigrants" },
    { id: 2, platform: "Instagram", name: "Mehvora Properties", industry: "Real Estate",          tags: ["Property Promos","Branding Visuals","Social Creatives"],       link: "https://www.instagram.com/mehvora.properties",  result: "Consistent real estate content & engagement" },
    { id: 3, platform: "Instagram", name: "Ridhima PTE Centre", industry: "Education / Coaching", tags: ["Exam Marketing","Coaching Creatives","Campaign Visuals"],       link: "https://www.instagram.com/ridhimaptecentre",    result: "Strong local reach for coaching institute" }
  ],

  industries: [
    { icon: "🏥", label: "Healthcare" },
    { icon: "🏠", label: "Real Estate" },
    { icon: "✈️", label: "Immigration" },
    { icon: "📚", label: "Education" },
    { icon: "☕", label: "F&B / Café" },
    { icon: "👗", label: "Fashion" },
    { icon: "🌿", label: "Landscaping" },
    { icon: "🚦", label: "Safety & Traffic" }
  ],

  testimonials: [
    { id: 1, quote: "World Social Solutions completely transformed our social media presence. The content strategy, creative designs, and consistent management helped us reach a wider patient audience effectively. Highly recommended.", name: "Dr. Chandan Arora",    title: "Shoulder & Sports Injury Specialist", rating: 5, initials: "CA" },
    { id: 2, quote: "Gurleen understood our brand identity perfectly. The creatives she designed for our immigration campaigns were professional, clear, and highly effective. Our engagement improved significantly.",                name: "Sodhi Immigration",    title: "Immigration Consultancy",            rating: 5, initials: "SI" },
    { id: 3, quote: "Professional communication, creative designs, and timely delivery made the entire project smooth. Our website and brand identity turned out exactly as we envisioned. Highly recommended.",                     name: "Coffee Moods",         title: "Café Brand",                         rating: 5, initials: "CM" }
  ],

  faqs: [
    { q: "Do you work with international clients?",          a: "Yes — we actively serve clients across India, Canada, the UK, Australia, and other countries. All work is done remotely with clear communication throughout." },
    { q: "How long does social media growth take?",          a: "Consistent, visible growth typically begins within 60–90 days of strategic content management. Our focus is sustainable, engaged audiences — not vanity metrics." },
    { q: "Do you offer packages or custom pricing?",         a: "We offer flexible custom pricing based on your specific requirements. Contact us for a free consultation and we'll build a plan that fits your goals and budget." },
    { q: "What industries do you specialize in?",            a: "We have hands-on experience in healthcare, real estate, immigration consultancy, education, F&B/cafés, fashion, landscaping, and safety services." },
    { q: "How do I get started?",                            a: "Simply reach out via our contact form or WhatsApp. We'll schedule a free consultation call to understand your goals and propose the right strategy." },
    { q: "Can you handle both design and marketing?",        a: "Absolutely. We are a full-service agency — from brand identity and web design to social media management, paid ads, SEO, and video editing, all under one roof." }
  ]
};

/* ── Persist to / restore from localStorage ── */
function wssSave() {
  try { localStorage.setItem('wss_sitedata', JSON.stringify(WSS)); } catch(e) {}
}
function wssLoad() {
  try {
    const raw = localStorage.getItem('wss_sitedata');
    if (!raw) return;
    const parsed = JSON.parse(raw);
    Object.keys(parsed).forEach(k => { if (WSS[k] !== undefined) WSS[k] = parsed[k]; });
  } catch(e) {}
}
wssLoad(); // auto-run
