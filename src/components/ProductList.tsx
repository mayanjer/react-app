import { useEffect, useState } from "react";

function ProductList() {

    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log("Loading products")
        setProducts(["product_1", "product_2"])
    }, [])
    return <div>
      Product List
  </div>;
}

export default ProductList;
