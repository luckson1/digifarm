"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import useStore from "@/lib/state-management";
import { useRouter } from "next/navigation";

export default function ProductCard({
  product,
}: {
  product: {
    name: string;
    id: number;
    price: number;
    description: string;
    imageUrl: string;
  };
}) {
  const setProduct = useStore((store) => store.setProduct);
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        setProduct(product);
        router.replace("/product");
      }}
      className="cursor-pointer"
    >
      <CardHeader>
        <Badge className="w-fit">Deal</Badge>
      </CardHeader>
      <CardContent className="text-base space-y-2">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={300}
          loading="lazy"
          quality={30}
          className="w-full h-56 rounded-md"
        />
        <p className="text-xl font-semibold">{product.name}</p>
        <p className="truncate text-sm text-muted-foreground">
          {product.description}
        </p>
        <div className="flex justify-between">
          Price : <p className="font-semibold"> KES {product.price}</p>
        </div>
      </CardContent>
    </Card>
  );
}
