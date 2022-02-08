import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "02-component-patterns/components"
import { Product } from "02-component-patterns/interfaces/interfaces";
import { useState } from "react";

import '../styles/custom-styles.css';

const products: Product[] = [
    { id: '1', title: 'Coffee Mug', image: './coffee-mug.png', },
    { id: '2', title: 'Coffee Mug-Meme', image: './coffee-mug2.png' }
]

interface ProductInCart extends Product {
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

    const onProductCardChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(prevShoppingCart => {

            if (count === 0) {
                delete prevShoppingCart[product.id];
                // const { [product.id]: toDelete, ...rest } = prevShoppingCart;
                return {...prevShoppingCart }
            }
            
            return {
                ...prevShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return (
        <div>
            <h1>Shopping Page</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard 
                            product={product} 
                            className="bg-dark text-white" 
                            key={product.id}
                            onChange={ onProductCardChange }
                        >
                            <ProductImage
                                className="custom-image"
                                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                            />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            <div className="shopping-cart">
                {
                    Object.values(shoppingCart).map(product => (
                        <ProductCard
                            product={product} 
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            key={product.id}
                        >
                            <ProductImage
                                className="custom-image"
                                style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
                            />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
