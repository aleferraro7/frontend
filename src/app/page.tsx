// import { Button } from "@/components/ui/button";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductCard from "@/components/product-card";

export const dynamic = "force-dynamic";

export default async function Page() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Nest-Next Example Page</h1>
        <Link href="/products/new" className={buttonVariants()}>
          Create Product
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-3">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
