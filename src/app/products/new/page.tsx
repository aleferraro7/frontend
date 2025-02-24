import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductForm from "./product-form";
import { getProduct } from "../products.api";

// interface Props {
//   params: {
//     id: string;
//   };
// }

export default async function ProductsNewPage({ params }: any) {
  const product = await getProduct(params?.id);
  console.log(product);
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {params?.id ? "Update Product" : "Create Product"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
