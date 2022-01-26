import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';



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