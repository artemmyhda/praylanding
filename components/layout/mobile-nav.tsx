"use client"

import React, { useState } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import {
  integrationCategories,
  turboIntegrations,
} from "@/data/turbo-integrations"
import { LuMenu } from "react-icons/lu"

import { menuDashboard } from "@/config/menu-dashboard"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LightDarkImage } from "@/components/shared/light-dark-image"

import { ModeToggle } from "../shared/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {LinkComponent} from "@/components/shared/link-component";
import {FaTelegram, FaTwitter} from "react-icons/fa";

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="flex w-full items-center justify-between md:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <LinkComponent href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h1 className="hover:text-[#0600ff]">PRAY</h1>
                </NavigationMenuLink>
              </LinkComponent>
              <LinkComponent href="/nft">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h1 className="hover:text-[#0600ff]">NFT</h1>
                </NavigationMenuLink>
              </LinkComponent>
            </NavigationMenuItem>
            <LinkComponent href="/claim">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <h1 className="hover:text-[#0600ff]">CLAIM</h1>
              </NavigationMenuLink>
            </LinkComponent>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Sheet>
  )
}
