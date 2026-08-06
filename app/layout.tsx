import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Goral Bhatt | Healthcare Market Research & Data Analyst";
const description =
  "Portfolio of Goral Bhatt, a healthcare market research and data analyst focused on evidence-led insights, clinical research support, and strategy analysis.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "goral-bhatt-healthcare.mehtagoral2530.chatgpt.site")
    .split(",")[0]
    .trim();
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProtocol === "http" ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      type: "website",
      url: origin,
      title,
      description,
      siteName: "Goral Bhatt",
      images: [
        {
          url: `${origin}/healthcare-intelligence-hero.jpg`,
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
      images: [`${origin}/healthcare-intelligence-hero.jpg`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
