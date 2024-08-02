"use client"

import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { LinkComponent } from "@/components/shared/link-component";
import { siteConfig } from "@/config/site";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export function SiteHeader() {
  const scrolled = useScroll(0)

  return (
      <header
          className={cn(
              "sticky top-0 z-50 w-full border-0 backdrop-blur transition-all",
              scrolled && "bg-background/50"
          )}
      >
        <div className="flex h-20 items-center">
          <div className="flex w-full items-center justify-center hidden md:flex">
            <MainNav />
          </div>
          <MobileNav />
          <div className="flex flex-1 pr-5 items-center justify-end space-x-2 md:flex">
            <LinkComponent href={`${siteConfig.links.twitter}`}>
              <FaTwitter />
            </LinkComponent>
            <LinkComponent href={`${siteConfig.links.telegram}`}>
              <FaTelegram />
            </LinkComponent>
          </div>
        </div>
      </header>
  )
}