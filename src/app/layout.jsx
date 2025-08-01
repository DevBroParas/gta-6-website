import "./globals.css";
import { TimelineProvider } from "@/Context/TimelineContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="SyN3eltW6eUyJTY2srkXjhZNEIoGijelsJxfCwVpIbY"
      />
      <body>
        <TimelineProvider>{children}</TimelineProvider>
      </body>
    </html>
  );
}
