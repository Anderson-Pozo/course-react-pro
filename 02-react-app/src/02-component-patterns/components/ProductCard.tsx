import { createContext } from 'react';
import { ProductContextProp, Product } from '02-component-patterns/interfaces/interfaces';
import useProduct from '02-component-patterns/hooks/useProduct';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increseBy
        }}>
            <div 
                className={` ${styles.productCard} ${className}`}
                style={style}
                key={product.id}
            >
                { children }
            </div>
        </Provider>
    )
}
