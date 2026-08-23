import type { MetadataRoute } from "next";

const base = "https://arfacapital.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/insights", "/contact", "/legal"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
