import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Icons } from './icons'
import Image from 'next/image'

export function DownloadCard() {
  return (
    <Card >
    <CardHeader>
      <CardTitle className='text-xl'>
      Download our App on Google Play Store
      </CardTitle>
      <CardDescription>
      Shop From  Anywhere Any Time
      </CardDescription>
      <CardContent>
       <div className='md:space-x-6 w-full flex justify-center items-center'>
       <Button size={'lg'}>
         <Image src='/play2.png' alt='google play' height={50} width={100} />
     
        </Button>
        <Button size={'lg'}>
         <Image src='/store2.png' alt='google play' height={50} width={100} />
     
        </Button>
       </div>
      </CardContent>
    </CardHeader>

  </Card>
  )
}

 
 export  function HowItWorksCard() {
   return (
    <Card>
    <CardHeader>
      <CardTitle className='text-xl'>
     How it Works
      </CardTitle>
      <CardDescription>
    Using our service is as easy as ABC
      </CardDescription>
      <CardContent>
       <div className='flex flex-col md:flex-row space-y-2   space-x-2 lg:space-x-6 text-sm justify-center items-center'>
     
          
            <div className='flex  flex-col'>
            <div className='text-base'>
               <Icons.register className='w-12 h-12 text-primary'/>
               <p>1. Register online</p>
               </div>
               </div>
            

        
       
   
          
          
            <div className='flex flex-col'>
            <div className='text-base'>
               <Icons.search className='w-12 h-12 text-primary'/>
               <p>2. Search for a product</p>
               </div>
            

        
            </div>
    
     
            
          
            <div className='flex flex-col'>
            <div className='text-base'>
               <Icons.cart className='w-12 h-12 text-primary'/>
               <p>3. Make a purchase</p>
               </div>
            

        
            </div>
    
      
             
       </div>
      </CardContent>
    </CardHeader>

  </Card>
   )
 }
 
