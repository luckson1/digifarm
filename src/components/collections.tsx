import { collections } from '@/lib/dummy-data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export  function CollectionCard({collection}: {collection: {name: string, src: string}}) {
  return (
    <Link
   
   href={'/store'}
    key={collection.name}
    className="max-w-xs relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto w-full"
  >
    <span aria-hidden="true" className="">
      <div className="w-full h-fit object-center object-cover sm:hidden">
        <Image src={collection.src} alt={collection.name} width={200} height={200} quality={30} priority loading='lazy'/>
      </div>
      <div className="w-full h-fit object-center object-cover hidden sm:flex">
        <Image src={collection.src} alt={collection.name} width={500} height={500} quality={30} priority loading='lazy'/>
      </div>
    </span>
    <span
      aria-hidden="true"
      className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
    />
    <span className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white">
      {collection.name}
    </span>
  </Link>
  )
}

export default function Collections() {
  return (
    <section
    aria-labelledby="category-heading"
    className="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto  w-full h-fit"
  >
    <div className="px-4 sm:px-6 lg:px-8">
          <h2
            id="category-heading"
            className="text-2xl font-light tracking-tight"
          >
            Shop by Category
          </h2>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-2  relative overflow-x-auto xl:overflow-visible">
              <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
                {collections.map((collection) => (
                  <CollectionCard key={collection.name} collection={collection} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a
            href="~/routes/__cart/index#"
            className="block text-sm font-semibold text-primary-600 hover:text-primary-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </section>
  )
}
