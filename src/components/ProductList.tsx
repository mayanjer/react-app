import { useEffect, useState } from "react";

function ProductList({category}:{category : string}) {

    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log("Loading products from " + category + " collection")
        setProducts(["clothing", "household"])
    }, [category])
    return <div>
      Product List
  </div>;
}

export default ProductList;
