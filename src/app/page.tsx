// import { Button } from "@/components/ui/button";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Nest-Next Example Page</h1>
      <Link href="/products/new" className={buttonVariants()}>
        Create Product
      </Link>
    </div>
  );
}
