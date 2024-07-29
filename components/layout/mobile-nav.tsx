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
                  <span>PRAY</span>
                </NavigationMenuLink>
              </LinkComponent>
              <LinkComponent href="/claim">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span>CLAIM</span>
                </NavigationMenuLink>
              </LinkComponent>
              <LinkComponent href="/nft">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span>NFT</span>
                </NavigationMenuLink>
              </LinkComponent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
          <div className="flex items-center space-x-2">
            <LinkComponent href={`${siteConfig.links.twitter}`}>
              <FaTwitter/>
            </LinkComponent>
            <LinkComponent href={`${siteConfig.links.telegram}`}>
              <FaTelegram/>
            </LinkComponent>
          </div>
      </div>
    </Sheet>
  )
}
