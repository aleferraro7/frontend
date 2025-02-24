import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProduct(params.id);
  console.log(product);
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            Product Detail: {product.id}
            <Link className={buttonVariants()} href="/">
              Go Home
            </Link>
          </CardTitle>
          <CardContent>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} />
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
