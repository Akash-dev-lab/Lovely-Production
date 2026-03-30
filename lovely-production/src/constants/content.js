/**
 * Content constants for the Lovely Production landing page.
 * Extracted directly from the UI design image.
 */
export const CONTENT = {
  hero: {
    title: "Lovely Production",
    subtitle: "Graphics | Video Editing | Animation Experts",
    cta: "Contact Now",
  },
  services: {
    title: "Our Services",
    items: [
      {
        id: 1,
        name: "Graphics Design",
        description: "Logos, Banners, Social Media",
        icon: "Palette",
      },
      {
        id: 2,
        name: "Video Editing",
        description: "Reels, YouTube, Ads",
        icon: "Clapperboard",
      },
      {
        id: 3,
        name: "VFX Work",
        description: "Visual Effects, CGI",
        icon: "WandSparkles",
      },
      {
        id: 4,
        name: "3D Animation",
        description: "Modeling & Animation",
        icon: "Box",
      },
    ],
  },
  portfolio: {
    title: "Our Portfolio",
    items: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      image: `/portfolio/p${i + 1}.webp`, // Placeholders
      hasAction: i % 3 === 0, // Some items have VIEW button from design
    })),
  },
  features: {
    title: "Why Choose Us",
    items: [
      { id: 1, name: "Fast Delivery", icon: "Zap" },
      { id: 2, name: "Creative Ideas", icon: "Lightbulb" },
      { id: 3, name: "Affordable Rates", icon: "Tag" },
      { id: 4, name: "Professional Quality", icon: "CheckCircle2" },
    ],
  },
  contact: {
    title: "Contact Us",
    getInTouch: {
      title: "Get in Touch",
      phone: "9315358093",
      email: "nshewaliya@gmail.com",
    },
    form: {
      fields: ["Your Name", "Your Email", "Your Message"],
      cta: "Send Message",
    },
  },
};

/**
 * Structured JSON version for data extraction tasks.
 */
export const SITE_DATA_JSON = JSON.stringify(CONTENT, null, 2);
