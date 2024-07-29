"use client"


import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import {LinkComponent} from "@/components/shared/link-component";
import {siteConfig} from "@/config/site";
import {FaTelegram, FaTwitter} from "react-icons/fa";

export function SiteHeader() {
  const scrolled = useScroll(0)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-all",
        scrolled && "bg-background/50 "
      )}
    >
      <div className="container flex h-20 items-center">
        <MainNav />
        <MobileNav />
        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
          <div className="flex items-center space-x-2">
            <LinkComponent href={`${siteConfig.links.twitter}`}>
              <FaTwitter/>
            </LinkComponent>
            <LinkComponent href={`${siteConfig.links.telegram}`}>
              <FaTelegram/>
            </LinkComponent>
          </div>
        </div>
      </div>
    </header>
  )
}
