"use client"
import {
    ChevronDownIcon,
    PlusIcon,

  } from "@radix-ui/react-icons"
  
  import { Button } from "@/components/ui/button"

  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Separator } from "@/components/ui/separator"
import { Icons } from "./icons"
import Link from "next/link"
import useStore from "@/lib/state-management"
import { useRouter } from "next/navigation"

  
  export function Account() {
    const [setFarmer, setBiz, setLogin, logout, auth]=useStore((store)=> [store.setFarmerForm, store.setBizForm, store.setLoginForm, store.logout, store.auth])
    const router=useRouter()
    return (
    
          <div className="flex items-center space-x-1 rounded-md bg-accent text-accent-foreground">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
            <Button variant='ghost' className="px-3 shadow-none text-primary">
         <div className="flex space-x-1 justify-center items-center">
         <Icons.user className="mr-2 h-4 w-4 text-primary" />
          <p className="text-primary">Account</p>
             <ChevronDownIcon className="h-4 w-4 text-primary" />
         </div>
            </Button>
           
           
            
             
             
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel>Have an Account?</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
            <Link href={'/auth'} className="w-full">
          {  !auth && <Button className="w-full" onClick={  ()=> {setLogin();  router.replace('/auth')}}>
            Login
             </Button>}
             {  auth && <Button className="w-full bg-destructive hover:bg-opacity-30 hover:bg-destructive" onClick={  ()=> {setLogin();  router.replace('/auth'); logout()}}>
            Logout
             </Button>}
            </Link>
                </DropdownMenuItem>
           {!auth && <>
            <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or create account
            </span>
          </div>
        </div>
                <DropdownMenuItem>
                <Button className="w-full" variant={'secondary'} onClick={  ()=> {setFarmer(); router.replace('/auth')}}>
               Sign Up as a Farmer
             </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Button variant={'outline'} className="w-full" onClick={  ()=> {setBiz(); router.replace('/auth')}}> 
             Sign up as a Buyer
             </Button>
                </DropdownMenuItem>
           </>}
         
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        
    )
  }