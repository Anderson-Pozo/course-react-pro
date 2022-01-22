import { createContext, ReactElement, useContext } from 'react';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import coffee from '../assets/coffee-mug.png';
import useProduct from '02-component-patterns/hooks/useProduct';


interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string;
    title?: string;
    image?: string;
}

interface ProductContextProp{
    product: Product;
    counter: number;
    increseBy: (value: number) => void
}

const ProductContext = createContext({} as ProductContextProp);
const { Provider } = ProductContext;

export const ProductImage = ({ img = '' }) => {
    
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img
    }else if (product.image) {
        imgToShow = product.image
    }else{
        imgToShow = noImage
    }

    return (
        <img className={styles.productImg} src={ imgToShow } alt='no image' />
    )
};

export const ProductTitle = ({ title }: { title?: string }) => {

    const { product } = useContext(ProductContext);
    
    return (
        <span className={styles.productDescription}>{title? title: product.title}</span>
    )
}

export const ProductButtons = () => {

    const { counter, increseBy } = useContext(ProductContext);
    
    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => increseBy(-1)}
            > - </button>
            <div className={styles.countLabel}> {counter} </div>
            <button
                className={styles.buttonAdd}
                onClick={() => increseBy(+1)}
            > + </button>
        </div>
    )
}


export const ProductCard = ({ product, children }: Props) => {

    const { counter, increseBy } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            increseBy
        }}>
            <div className={styles.productCard} key={product.id}>
                { children }
                {/* <ProductImage img={product.image} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increseBy={increseBy}/> */}
            </div>
        </Provider>
    )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons
