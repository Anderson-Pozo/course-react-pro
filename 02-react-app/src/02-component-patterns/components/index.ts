import { ProductCard as ProductCardHOC} from "./ProductCard";
import { ProductHOCProps } from "02-component-patterns/interfaces/interfaces";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

// * If you are using the second way
// export { ProductButtons } from "./ProductButtons";
// export { ProductImage } from "./ProductImage";
// export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})