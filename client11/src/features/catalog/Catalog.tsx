import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

// interface Props{
//     products: Product[];
//     addProduct: () => void;
// }


export default function Catalog(){
   
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   fetch('http://localhost:4000/api/products')
    //    .then(response => response.json())
    //    .then(data => setProducts(data))
    // }, [])
  

    useEffect(() => {
        agent.Catalog.list()
            .then(products => {
                setProducts(products)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
      }, [])

    if(loading) return <LoadingComponent message='Loading products...' />

    return(
        <>
            <ProductList products={products} />
            
            {/* <Button variant='contained' onClick={addProduct}>Add product</Button>
         */}
        </>
    )
}