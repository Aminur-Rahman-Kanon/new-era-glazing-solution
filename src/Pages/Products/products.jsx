import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsContainer from '../../Components/ProductsContainer/productsContainer';

const Products = () => {

    const { productId } = useParams();

    return (
        <div>
            {
                productId ? <ProductsContainer product={ productId }/>
                :
                <div>
                    No product selected
                </div>
            }
        </div>
    )
}

export default Products;

