type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    mail: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "near",
  description: "Near | Near Admin.",
  url: "https://near.io",
  ogImage: "https://near.io/og.jpg",
  links: {
    twitter: "https://twitter.com/near",
    github: "https://github.com/yunusoruk",
    mail: "mailto:info@near.io",
  },
};
