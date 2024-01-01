import { Product } from "../../app/models/product";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
// interface Props{
//     products: Product[];
//     addProduct: () => void;
// }

// export default function Catalog(props: any){
//     return(
//        <>
//             <ul>
//                 {props.products.map((product: any) => (
//                     <li key={product.id}>{product.name} - {product.price}</li>
//                 ))}
//             </ul>
//             <button onClick={props.addProduct}>Add Product</button>
        
//       </>
//     )
// }

// export default function Catalog(props: Props){
//     return(
//        <>
//             <ul>
//                 {props.products.map(product => (
//                     <li key={product.id}>{product.name} - {product.price}</li>
//                 ))}
//             </ul>
//             <button onClick={props.addProduct}>Add Product</button>
        
//       </>
//     )
// }




// export default function Catalog({products, addProduct}: Props){
//     return(
//        <>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>{product.name} - {product.price}</li>
//                 ))}
//             </ul>
//             <button onClick={addProduct}>Add Product</button>
        
//       </>
//     )
// }


export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('http://localhost:4000/myfirstapi/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])


    // function addProduct(){
    //     setProducts(prevState => [...prevState, 
    //     {
    //         id: prevState.length + 101,
    //         name: 'product' + (prevState.length+1), 
    //         price: (prevState.length*100)+100,
    //         brand: 'some brand',
    //         description: 'some description',
    //         pictureUrl: 'http://picsum.photos/200'
    //     }])
    // }

    return(
       <>
            <ProductList products={products} />
      </>
    )
}