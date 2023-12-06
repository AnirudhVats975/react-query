import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Product = () => {
    const params = useParams();

    const featchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
        const data = await response.json();
        return data;
    }

    const { isLoading, error, data: products } = useQuery({ queryKey: ["product", params.productId ], queryFn: featchProduct })

    if (isLoading) {
        return <h3>Loading...</h3>
      }
    
      if (error) {
        return <h3>error : {error.message}</h3>
      }

    return (
        <div>Product</div>
    )
}

export default Product