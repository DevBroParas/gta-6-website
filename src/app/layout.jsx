// app/layout.js or layout.tsx
import "./globals.css";
import { TimelineProvider } from "@/Context/TimelineContext";

export const metadata = {
  title: "GTA 6 Launch Showcase – devbro.site",
  description:
    "Unofficial GTA 6 launch website with slick animations. Built by Devbro using Next.js and GSAP.",
  keywords: "GTA 6, devbro, gta6.devbro.site, Rockstar GTA6, Next.js project",
  robots: "index, follow",
  verification: {
    google: "SyN3eltW6eUyJTY2srkXjhZNEIoGijelsJxfCwVpIbY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://gta6.devbro.site" />
      </head>
      <body>
        <TimelineProvider>{children}</TimelineProvider>
      </body>
    </html>
  );
}
