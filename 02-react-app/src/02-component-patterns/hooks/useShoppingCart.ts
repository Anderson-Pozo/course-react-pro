import { useState } from 'react';
import { Product, ProductInCart } from '02-component-patterns/interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

    const onProductCardChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(prevShoppingCart => {

            const productInCart: ProductInCart = prevShoppingCart[product.id] || {...product, count: 0};
            
            if ((productInCart.count + count) > 0) {
                productInCart.count += count;
                return{
                    ...prevShoppingCart,
                    [product.id]: productInCart
                }
            }

            delete prevShoppingCart[product.id]
            return { ...prevShoppingCart }

            // if (count === 0) {
            //     delete prevShoppingCart[product.id];
            //     return {...prevShoppingCart }
            // }
            
            // return {
            //     ...prevShoppingCart,
            //     [product.id]: { ...product, count }
            // }
        })
    }

    return {
        shoppingCart,
        onProductCardChange
    }
}