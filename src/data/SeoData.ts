import { businessContact, businessSocials } from "./BusinessContact"
import project_data from "./ProjectData"

// Search engine titles and descriptions for each page. vite.config.ts also reads this
// to write a separate HTML file per page (so crawlers see the right tags without
// running JavaScript) and to build sitemap.xml. Every route needs an entry: server.js
// answers paths without one with a 404 status, and the SEO component marks them noindex.
export const siteUrl = "https://mbuniversalhome.com"
export const siteName = "MB Universal Home"
export const shareImage = `${siteUrl}/assets/imgs/og-image.jpg`

const services = [
   "Custom Wood & Metal Framing",
   "Level 5 Drywall & Finishing",
   "Commercial Drop Ceilings",
   "Kitchen & Bathroom Tile Work",
   "Interior Painting & Trim",
]

// Business details Google can show in search and Maps results (schema.org structured data).
export const structuredData = {
   "@context": "https://schema.org",
   "@graph": [
      {
         "@type": "WebSite",
         name: siteName,
         url: `${siteUrl}/`,
      },
      {
         "@type": "GeneralContractor",
         "@id": `${siteUrl}/#business`,
         name: "MB Universal Home LLC",
         alternateName: siteName,
         url: `${siteUrl}/`,
         logo: `${siteUrl}/assets/imgs/logo/logo.png`,
         image: shareImage,
         description: "Drywall, framing, drop ceiling, tile, and interior painting contractor for residential and commercial properties.",
         telephone: businessContact.phoneDisplay,
         email: businessContact.email,
         address: {
            "@type": "PostalAddress",
            streetAddress: "109 Milltown Rd",
            addressLocality: "East Brunswick",
            addressRegion: "NJ",
            postalCode: "08816",
            addressCountry: "US",
         },
         openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "18:00",
         },
         areaServed: { "@type": "State", name: "New Jersey" },
         sameAs: businessSocials.filter((social) => social.name !== "WhatsApp").map((social) => social.href),
         hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: services.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
         },
      },
   ],
}

export interface PageSeo {
   title: string;
   description: string;
}

export const pageSeo: Record<string, PageSeo> = {
   "/": {
      title: "MB Universal Home | Drywall, Framing & Interior Contractor in NJ",
      description: "MB Universal Home LLC in East Brunswick, NJ: Level 5 drywall, wood and metal framing, drop ceilings, tile, and interior painting for homes and businesses across New Jersey. Call +1 732-790-7530.",
   },
   "/about": {
      title: "About Us | MB Universal Home, NJ Drywall & Renovation Contractor",
      description: "Meet MB Universal Home LLC, an East Brunswick, NJ contractor with 15+ years of experience in drywall, framing, and complete interior renovation for residential and commercial clients.",
   },
   "/services": {
      title: "Drywall, Framing, Drop Ceilings, Tile & Painting Services in NJ | MB Universal Home",
      description: "Our services: custom wood and metal stud framing, Level 5 drywall hanging and finishing, commercial drop ceilings, kitchen and bathroom tile, and interior painting and trim across New Jersey.",
   },
   "/projects": {
      title: "Our Projects | Drywall & Interior Renovation Work | MB Universal Home",
      description: "See drywall, framing, ceiling, tile, and painting projects completed by MB Universal Home for homes and commercial spaces across New Jersey.",
   },
   "/contact": {
      title: "Contact Us for a Free Quote | MB Universal Home, East Brunswick NJ",
      description: "Get a quote for drywall, framing, drop ceilings, tile, or painting. Call +1 732-790-7530, email mbuniversalhome@gmail.com, or visit us at 109 Milltown Rd, East Brunswick, NJ 08816.",
   },
   ...Object.fromEntries(project_data.map(({ page, title }) => [`/projects/${page}`, {
      title: `${title} Project Photos | ${siteName}`,
      description: `See photos of our ${title} work by MB Universal Home, a drywall, framing, and interior renovation contractor serving New Jersey.`,
   }])),
}
