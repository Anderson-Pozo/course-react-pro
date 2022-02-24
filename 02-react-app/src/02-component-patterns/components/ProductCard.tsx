import { createContext } from 'react';
import { ProductContextProp, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '02-component-patterns/interfaces/interfaces';
import useProduct from '02-component-patterns/hooks/useProduct';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (arg: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increseBy, maxCount, isMaxCountReached, reset } =
        useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            product,
            counter,
            increseBy,
            maxCount
        }}>
            <div
                className={` ${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}
