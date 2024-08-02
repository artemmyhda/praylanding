"use client"

import { cn } from "@/lib/utils"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { LinkComponent } from "@/components/shared/link-component";
import { siteConfig } from "@/config/site";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export function SiteHeader() {

  return (
      <header
          className={cn(
              "sticky top-0 z-50 w-full backdrop-blur transition-all border-0 border-stone-300 shadow-lg",
          )}
      >
        <div className="flex h-20 items-center">
          <div className="w-full items-center justify-center hidden md:flex">
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