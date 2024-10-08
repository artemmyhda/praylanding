import "@/styles/app.css"
import "@/styles/globals.css"

import React, { ReactNode } from "react"
import { env } from "@/env.mjs"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import RootProvider from "@/components/providers/root-provider"
import BackgroundMusic from "@/components/BackgroundMusic";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import BuyButton from "@/components/BuyButton";

const url = env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(url),
  title: `${siteConfig.name} - ${siteConfig.description}`,
  description: siteConfig.description,
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: url?.toString(),
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      <body
          className={cn(
              "min-h-screen bg-background antialiased",
          )}
      >
      <RootProvider>{children}</RootProvider>
      <Toaster/>
      <div className="md:hidden fixed bottom-5 left-5">
          <BuyButton/>
      </div>
      <BackgroundMusic/>
      <Analytics/>
      <SpeedInsights/>
      </body>
      </html>
    </>
  )
}
