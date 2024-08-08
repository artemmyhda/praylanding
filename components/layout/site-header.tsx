"use client"

import { cn } from "@/lib/utils"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { LinkComponent } from "@/components/shared/link-component";
import { siteConfig } from "@/config/site";
import { FaTelegram, FaTwitter } from "react-icons/fa";
import BuyButton from "@/components/BuyButton";
import React from "react";

export function SiteHeader() {

  return (
      <header
          className={cn(
              "sticky top-0 z-50 w-full backdrop-blur transition-all border-0 border-stone-300 shadow-lg",
          )}
      >
        <div className="flex h-20 items-center">
          <div className="w-full pl-64 items-center justify-center hidden md:flex">
            <MainNav />
          </div>
          <MobileNav />
          <div className="flex pr-5 items-center justify-end space-x-2 md:flex">
            <div className="hidden md:block">
              <BuyButton/>
            </div>
            <LinkComponent href={`${siteConfig.links.twitter}`}>
              <FaTwitter className="hover:text-[#0600ff]" size={24} />
            </LinkComponent>
            <LinkComponent href={`${siteConfig.links.telegram}`}>
              <FaTelegram className="hover:text-[#0600ff]" size={24} />
            </LinkComponent>
          </div>
        </div>
      </header>
  )
}