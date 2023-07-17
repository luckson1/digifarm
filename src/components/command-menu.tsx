"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { DialogProps } from "@radix-ui/react-alert-dialog"

import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { collections, freshProduceData } from "@/lib/dummy-data"
import useStore from "@/lib/state-management"
import { Cherry } from "lucide-react"

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter()
  const setProduct=useStore((store)=> store.setProduct)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search Products...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search Products.." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Products">
            {freshProduceData
              .map((p) => (
                <CommandItem
                  key={p.id}
                  value={p.name}
                  onSelect={() => {
                    runCommand(() => {router.push('/product'); setProduct(p)})
                  }}
                >
                  <Cherry className="mr-2 h-4 w-4 text-primary" />
                  {p.name}
                </CommandItem>
              ))}
          </CommandGroup>
          <CommandGroup heading="Collections">
            {collections
              .map((c) => (
                <CommandItem
                  key={c.name}
                  value={c.name}
                  onSelect={() => {
                    runCommand(() => {router.push('/store')})
                  }}
                >
                  <Cherry className="mr-2 h-4 w-4 text-primary" />
                  {c.name}
                </CommandItem>
              ))}
          </CommandGroup>
          
        </CommandList>
      </CommandDialog>
    </>
  )
}