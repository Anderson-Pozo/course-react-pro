import { Fragment } from "react";
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "02-component-patterns/components"
import { products } from "02-component-patterns/data/products";

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
    
    const product = products[0];

    return (
        <div>
            <h1>Shopping Page</h1>
            <div>
                <ProductCard 
                    product={product} 
                    className="bg-dark text-white" 
                    key={product.id}
                    initialValues={{
                        count: 4,
                        maxCount: 15
                    }}
                >
                    {
                        ({ reset, count, increseBy, isMaxCountReached }) => (
                            <Fragment>
                                <ProductImage
                                    className="custom-image"
                                    style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                                />
                                <ProductTitle className="text-bold" />
                                <ProductButtons className="custom-buttons"/>
                                <button onClick={reset}>Reset</button>
                                <button onClick={ ()=> increseBy(-2) }>-2</button>
                                <span style={{ padding: '8px' }}>{ count }</span>
                                {
                                    (!isMaxCountReached) &&
                                    <button onClick={()=> increseBy(2)}>+2</button>
                                }
                            </Fragment>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    )
}
