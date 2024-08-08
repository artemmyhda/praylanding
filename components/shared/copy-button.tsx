"use client"

import { useEffect, useState } from "react"
import { LuCheck, LuCopy } from "react-icons/lu"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  children: React.ReactNode
  src?: string
}

export async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value)
}

export function CopyButton({
  value,
  className,
  children,
  src,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 3000)
  }, [hasCopied])

  return (
      <Button
          className={cn(
              "relative border-0 z-10 inline-flex h-8 items-center gap-x-1 px-2 font-mono text-sm text-muted-foreground hover:text-[#0600ff]",
              className
          )}
          style={{ backgroundColor: 'transparent', border: 'none', boxShadow: 'none', outline: 'none' }}
          onClick={async () => {
            await copyToClipboard(value);
            setHasCopied(true);
          }}
          {...props}
      >
        {children}
        <span className="sr-only">Copy</span>
        {hasCopied ? (
            <LuCheck className="h-3 w-3" />
        ) : (
            <LuCopy className="h-3 w-3" />
        )}
      </Button>
  )
}
