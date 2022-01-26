import { createContext } from 'react';
import { ProductContextProp, ProductCardProps } from '02-component-patterns/interfaces/interfaces';
import useProduct from '02-component-patterns/hooks/useProduct';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {

    const { counter, increseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increseBy
        }}>
            <div className={styles.productCard} key={product.id}>
                { children }
            </div>
        </Provider>
    )
}
