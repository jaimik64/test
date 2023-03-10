import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";

function Products () {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then(res=>res.json())
        .then(json=> setProducts(json))
    }, []);

    return(
        <div className="text-center">
            <div className="title m-3">
                Products
            </div>
            <div className="row">
                {
                    products ? 
                    (
                        products.map(product => {
                            return (
                                <div className="col-lg-3 col-md-3 col-sm-6">
                                    <ProductCard product={product}></ProductCard>
                                </div>
                            )
                        })
                    )
                    : "" 
                }
            </div>      
        </div>
            
    );

}

export default Products;