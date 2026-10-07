import { useEffect, useState } from "react";

function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log("Loading products")
    })
  return <div></div>;
}

export default ProductList;
