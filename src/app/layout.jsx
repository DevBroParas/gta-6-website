import "./globals.css";
import { TimelineProvider } from "@/Context/TimelineContext";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>GTA 6 Launch Showcase – devbro.site</title>
        <meta
          name="description"
          content="Unofficial GTA 6 launch website with slick animations. Built by Devbro using Next.js and GSAP."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="GTA 6, devbro, gta6.devbro.site, Rockstar GTA6, Next.js project"
        />
        <meta
          name="google-site-verification"
          content="SyN3eltW6eUyJTY2srkXjhZNEIoGijelsJxfCwVpIbY"
        />
        <link rel="canonical" href="https://gta6.devbro.site" />
      </Head>

      <body>
        <TimelineProvider>{children}</TimelineProvider>
      </body>
    </html>
  );
}
