export const site = {
  name: "ARFA",
  tagline: "Independent research on markets and portfolio structure",
  email: "editorial@arfacapital.com",
};

/**
 * Photographic backgrounds. These are hotlinked from Unsplash's CDN and load
 * directly in the visitor's browser; each is layered over a solid dark colour so
 * the design degrades gracefully if an image fails. Swap for self-hosted,
 * licensed imagery (placed in /public) before launch.
 */
const u = (id: string, w = 2400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("photo-1480714378408-67cf0d13bc1b"), // city skyline at dusk
  process: u("photo-1486406146926-c627a92ad1ab"), // towers, low angle
  cta: u("photo-1444723121867-7a241cacace9"), // financial district
  about: u("photo-1454165804606-c3d57bc86b40", 1600), // desk / workspace
  insights: u("photo-1460925895917-afdab827c52f", 1600), // analytics on screen
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Notice", href: "/legal" },
];
