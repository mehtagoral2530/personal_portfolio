import type { Metadata } from "next";
import { assetPath } from "@/lib/site-paths";
import "./globals.css";

const siteOrigin =
  process.env.SITE_ORIGIN ??
  "https://goral-bhatt-healthcare.mehtagoral2530.chatgpt.site";
const title = "Goral Bhatt | Healthcare Market Intelligence";
const description =
  "Portfolio of Goral Bhatt, a healthcare market intelligence analyst working across medical-device research, competitive intelligence, tracker design, and research synthesis.";
const socialImage = new URL(assetPath("/healthcare-intelligence-hero.jpg"), siteOrigin).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Goral Bhatt",
    images: [
      {
        url: socialImage,
        width: 1408,
        height: 912,
        alt: "Goral Bhatt — healthcare market intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="impeccable-direction"
          content="Healthcare Intelligence Fieldbook — seed ed15bcb8"
        />
      </head>
      <body>
        {/*
          THESIS: A healthcare-intelligence fieldbook, not a résumé arranged as cards.
          OWN-WORLD: Existing paper, coral, sage, sky, and lavender become full research fields and indexed tabs; ink anchors all type.
          STORY: Recruiters move from fit to real research work to career context to contact without decoding visual decoration.
          FIRST VIEWPORT: A research-brief title crosses the page beside the approved evidence image and a decisive work CTA.
          FORM: Fieldbook evidence plates; seed ed15bcb8.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
        */}
        {children}
      </body>
    </html>
  );
}
