'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import useStore from '@/lib/state-management'
import Image from 'next/image'
import React from 'react'

export default function Page() {
const product=useStore((store=>store.product))
if(!product) return <div className='flex justify-center items-center text-4xl h-screen'>No Product Found</div>
  return (
    <div className=' h-fit min-h-screen py-5 px-7 items-center flex flex-col md:px-12 space-y-4 lg:space-x-4'>
<div className='w-full'>
<p className='tracking-widest text-3xl font-medium'>{product.name}</p>
</div>
   <div className='w-full flex flex-col lg:flex-row space-y-4 lg:space-x-4 justify-center items-start lg:space-y-0 mx-5'>
<Card>
  
    <Image src={product.imageUrl} alt={product.name} width={1000} height={1000} priority className='rounded-md'/>
 
</Card>
<Card>
  <CardHeader>
    <CardTitle>{product.name}</CardTitle>
  </CardHeader>
  <CardContent className='space-y-4'>{product.description} 
  <div className='flex justify-between'>
    <p>Price {" "}: </p>
    <p className='font-medium'>{product.price}</p>
  </div>
  </CardContent>
  <CardFooter>
    <Button className='w-full max-w-xs'>Add to Cart</Button>
  </CardFooter>
</Card>
   </div>

    </div>
  )
}
