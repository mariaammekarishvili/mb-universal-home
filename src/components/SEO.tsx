import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageSeo, siteName, siteUrl } from "../data/SeoData";

const setHeadAttribute = (selector: string, attribute: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attribute, value);
};

// index.html (and the per-page copies vite.config.ts writes) already carries these
// tags for the page that was loaded; this keeps them right as visitors move between
// pages. Paths without an entry in pageSeo, such as the 404 page, are marked noindex.
const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pageSeo[path];
    const { title, description } = page ?? { title: `Page Not Found | ${siteName}`, description: "" };

    document.title = title;
    setHeadAttribute('meta[name="description"]', "content", description);
    setHeadAttribute('link[rel="canonical"]', "href", siteUrl + path);
    setHeadAttribute('meta[property="og:title"]', "content", title);
    setHeadAttribute('meta[property="og:description"]', "content", description);
    setHeadAttribute('meta[property="og:url"]', "content", siteUrl + path);

    if (page) return;
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.append(robots);
    return () => robots.remove();
  }, [pathname]);

  return null;
};

export default SEO;
