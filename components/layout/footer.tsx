import { HTMLAttributes } from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const classes = cn(
    className,
    "flex flex-col items-center justify-center px-4 py-6"
  )

  return (
    <footer className={classes} {...props}>
    </footer>
  )
}
