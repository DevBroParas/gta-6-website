import "./globals.css";
import { TimelineProvider } from "@/Context/TimelineContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TimelineProvider>{children}</TimelineProvider>
      </body>
    </html>
  );
}
