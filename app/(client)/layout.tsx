import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://seo-next-pdhe.vercel.app/"),
  // title: "Dev Blook - A blog for developers",
  title: {
    default: "Dev Blook - A blog for developers",
    template: '%s | Dev Blook - A blog for developers'
  },
  description: "A blog for developers by developers it's best for web developers! dev dev dev",
  openGraph: {
    title: "Dev Blook - A blog for developers",
    description: "A blog for developers by developers! great place! BEST! thebest",
    type: "website",
    locale: "en_US",
    url: "https://seo-next-pdhe.vercel.app/",
    siteName: "SeoNext"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
