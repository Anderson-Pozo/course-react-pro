import { createContext, ReactElement } from 'react';
import { ProductContextProp, Product } from '02-component-patterns/interfaces/interfaces';
import useProduct from '02-component-patterns/hooks/useProduct';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
}

export const ProductCard = ({ product, children, className }: Props) => {

    const { counter, increseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increseBy
        }}>
            <div 
                className={` ${styles.productCard} ${className}`} 
                key={product.id}
            >
                { children }
            </div>
        </Provider>
    )
}
