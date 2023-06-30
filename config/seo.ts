import { type Metadata } from "next";

export const URLS = process.env.URL_SITE;
export const title = "d7holic";
export const description =
  "Hello, I am Marlon Martin, a student of computer studies based in Manila, Philippines. At present, I am exploring the realm of software engineering and engaging in competitive programming.";

export const seo: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  applicationName: title,
  appleWebApp: {
    capable: true,
    title,
    statusBarStyle: "default",
  },
  icons: {
    other: [
      { url: "/assets/images/icon16.png", sizes: "16x16" },
      { url: "/assets/images/icon32.png", sizes: "32x32" },
    ],
    icon: "favicon.ico",
    apple: "/assets/images/icon32.png",
  },
  creator: title,
  authors: [{ name: title, url: URLS }],
  openGraph: {
    url: URLS,
    title,
    description,
    images: [
      {
        url: "/assets/images/opengraph-image.png",
      },
    ],
    type: "website",
    siteName: title,
  },
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "Marlon",
    "Martin",
    "Decimo",
    "Dez",
    title,
    `${title} | Software Developer`,
    `${title} | Back-End Developer`,
    `${title} | Full Stack Developer`,
    `${title} | Web Developer`,
    `${title} | React Developer`,
    `${title} | Typescript Developer`,
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  themeColor: "#00FF94",
};
