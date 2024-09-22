import { formatCurrency } from "@/lib/formatters";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
    imagePath: string,
    name: string,
    priceInCents: number,
    description: string,
    id: string
}

export function ProductCard({imagePath, name, priceInCents, description, id}: ProductCardProps) {
    return (
        <Card>
            <div className="relative w-full h-auto aspect-video flex justify-center">
                <Image src={imagePath} height={300} width={280} alt={name}/>
            </div>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="line-clamp-4">{description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild size="lg" className="w-full">
                    <Link href={`/products/${id}/purchase`}>Purchase</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export function ProductCardSkeleton() {
    return (
      <Card className="overflow-hidden flex flex-col animate-pulse">
        <div className="w-full aspect-video bg-gray-300" />
        <CardHeader>
          <CardTitle>
            <div className="w-3/4 h-6 rounded-full bg-gray-300" />
          </CardTitle>
          <CardDescription>
            <div className="w-1/2 h-4 rounded-full bg-gray-300" />
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="w-full h-4 rounded-full bg-gray-300" />
          <div className="w-full h-4 rounded-full bg-gray-300" />
          <div className="w-3/4 h-4 rounded-full bg-gray-300" />
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled size="lg"></Button>
        </CardFooter>
      </Card>
    )
  }