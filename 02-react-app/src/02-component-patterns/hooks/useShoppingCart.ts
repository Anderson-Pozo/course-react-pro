import { useState } from 'react';
import { Product, ProductInCart } from '02-component-patterns/interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

    const onProductCardChange = ({ count, product }: { count: number, product: Product }) => {
        console.log({count});
        
        setShoppingCart(prevShoppingCart => {
            if (count === 0) {
                delete prevShoppingCart[product.id];
                return {...prevShoppingCart }
            }
            
            return {
                ...prevShoppingCart,
                [product.id]: { ...product, count }
            }
        })
    }

    return {
        shoppingCart,
        onProductCardChange
    }
}