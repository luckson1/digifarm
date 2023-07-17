'use client'
import { siteConfig } from "@/config"
import Link from "next/link"
import { usePathname } from "next/navigation"


export function SiteFooter() {
  const paths=usePathname()
  const isDashboard=paths==='/dashboard'
  if (isDashboard )return null
  return (
    <footer className="py-6 md:py-12 md:px-8  bg-primary flex flex-col">
          <div className="container mx-auto px-8">
              <div className="flex w-full flex-col py-6 md:flex-row">
               
                <div className="flex-1">
                  <p className="uppercase text-slate-100   md:mb-6 ">Links</p>
                  <ul className="list-reset mb-6">
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href="/"
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href="/"
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        Help
                      </Link>
                    </li>
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href="/"
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="uppercase text-slate-100   md:mb-6">Legal</p>
                  <ul className="list-reset mb-6">
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href="/"
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        Terms
                      </Link>
                    </li>
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href="/"
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="uppercase text-slate-100   md:mb-6">Social</p>
                  <ul className="list-reset mb-6">
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href=""
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        Facebook
                      </Link>
                    </li>
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href=""
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                     Twitter
                      </Link>
                    </li>
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href=""
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                           Instagram
                      
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="uppercase text-slate-100   md:mb-6">Company</p>
                  <ul className="list-reset mb-6">
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href="/"
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        Official Blog
                      </Link>
                    </li>
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href=""
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="mr-2 mt-2 inline-block md:mr-0 md:block">
                      <Link
                        href=""
                        className="text-slate-100 no-underline hover:text-slate-200   hover:underline"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
    
              </div>
              <div className=" flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row text-slate-100">
  
  <p className="text-center text-sm leading-loose  md:text-left">
    Built by{" "}
    <a
      href={siteConfig.links.site}
      target="_blank"
      rel="noreferrer"
      className="font-medium underline underline-offset-4"
    >
     Jack
    </a>
    . The source code is available on{" "}
    <a
      href={siteConfig.links.github}
      target="_blank"
      rel="noreferrer"
      className="font-medium underline underline-offset-4"
    >
      Github
    </a>
    .
  </p>
</div>
            </div>
    
    </footer>
  )
}