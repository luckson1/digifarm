"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image"
import useStore from "@/lib/state-management"

export function MainNav() {
  const pathname = usePathname()
const auth=useStore(store=>store.auth)
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-4">
        <Image className="h-8 w-16"
        alt="logo"
        src={'/logo.png'}
        height={50}
        width={50} />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
     
   
            <Link
              href={"/store"}
             
              className={cn(
                "flex items-center px-4",
               "font-bold text-primary"
                
              )}
            >
           Shop
            </Link>
       { auth &&    <Link
              href={"/dashboard"}
             
              className={cn(
                "flex items-center px-4",
               "font-bold text-primary"
                
              )}
            >
        Dashboard
            </Link>}
        
    
      </nav>
    </div>
  )
}