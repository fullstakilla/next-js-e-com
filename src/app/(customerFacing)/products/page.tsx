import { ProductCard, ProductCardSkeleton } from "@/components/ProductCard";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import { Suspense } from "react";

const getProducts = cache(() => {
    return db.product.findMany({
        where: {isAvailableForPurchase: true},
        orderBy: {name: "asc"}
    } )
}, ["/products", "getProducts"])

export default function ProductsPage() {
    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-5">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Suspense

                    fallback={
                        <>
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                        </>
                    }>
                    <ProductsSespense />
                </Suspense>
            </div>
        </div>
    )
}

async function ProductsSespense() {
    const products = await getProducts()
    return products.map(product => (
        <ProductCard key={product.id} {...product} />
    ))
}